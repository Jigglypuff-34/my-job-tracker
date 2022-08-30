const bcrypt = require("bcrypt");
const db = require("./models");

const controller = {};

controller.login = async (req, res, next) => {
  console.log("logging in from backend");
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email='${email}';`;
    const user = await db.query(query);
    // no user found
    if (user.rows.length === 0) {
      res.redirect(400, "/");
    }
    // found user
    else {
      const match = await bcrypt.compare(password, user.rows[0].password); // true or false

      if (match) {
        res.cookie("user_id", user.rows[0]._id);
        console.log("cookies", req.cookies.user_id);
        res.locals.user_id = user.rows[0]._id;
        // console.log("inserted cookie:", req.cookies.user_id);
        return next();
      } else {
        res.redirect(400, "/");
      }
    }
  } catch (err) {
    return next({
      log: "Error at middleware controller.login",
      status: "501",
      message: {
        err: "error occured while logging in",
      },
    });
  }
};

controller.register = async (req, res, next) => {
  try {
    // console.log('data : ', req.body);
    const { name, email, password } = req.body;
    const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *`;
    const hashedPW = await bcrypt.hash(password, 10);
    const params = [name, email, hashedPW];
    const user = await db.query(query, params);

    return next();
  } catch (err) {
    // console.log(err);
    return next({
      log: "Error at middleware controller.register",
      status: "501",
      message: {
        err: "error occured while registering",
      },
    });
  }
};

controller.getJobs = async (req, res, next) => {
  try {
    let user_id_var;
    if (res.locals.isLoggedIn) user_id_var = res.locals.isLoggedIn.user_id;
    else user_id_var = res.locals.user_id;
    // console.log('COOKIES ', req.cookies.user_id);
    const query = `SELECT * FROM jobs WHERE user_id='${user_id_var}';`;
    const jobs = await db.query(query);
    // console.log('jobs : ', jobs.rows);
    res.locals.jobs = jobs.rows;

    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: "Error at middleware controller.getJobs",
      status: "501",
      message: {
        err: "error occured while getting jobs",
      },
    });
  }
};

controller.isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.user_id)
      res.locals.isLoggedIn = { loggedin: true, user_id: req.cookies.user_id };
    else res.locals.isLoggedIn = { loggedin: false, user_id: null };
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: "Error at middleware controller.isLoggedIn",
      status: "501",
      message: {
        err: "error occured while checking if user is logged in",
      },
    });
  }
};

controller.add = async (req, res, next) => {
  try {
    const { position, company, status } = req.body;
    // console.log("reslocals user_id:", res.locals.user_id);
    const query = `INSERT INTO jobs (user_id, position, company, status, note) VALUES ($1, $2, $3, $4, $5) RETURNING *;`;
    const params = [req.cookies.user_id, position, company, status, ""];
    const addedJob = await db.query(query, params);
    res.locals.addedJob = addedJob.rows[0];
    return next();
  } catch (err) {
    return next({
      log: "Error at middleware controller.add",
      status: "501",
      message: {
        err: "error occured while adding job",
      },
    });
  }
};

controller.update = async (req, res, next) => {
  try {
    const { _id, status } = req.body;
    const query = `UPDATE jobs SET status='${status}' WHERE _id = ${_id}`;
    const jobUpdate = await db.query(query);

    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: "Error at middleware controller.update",
      status: "501",
      message: {
        err: "error occured while updating",
      },
    });
  }
};

controller.delete = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const query = `DELETE FROM jobs WHERE _id=${_id}`;
    const deleted = await db.query(query);
    // console.log(deleted);
    return next();
  } catch (err) {
    return next({
      log: "Error at middleware controller.delete",
      status: "501",
      message: {
        err: "error occured while removing",
      },
    });
  }
};

controller.noteUpdate = async (req, res, next) => {
  try {
    const { _id, note } = req.body;
    const query = `UPDATE jobs SET note='${note}' WHERE _id =${_id}`;
    const jobUpdate = await db.query(query);

    return next();
  } catch (err) {
    return next({
      log: "Error at middleware controller.noteUpdate",
      status: "501",
      message: {
        err: "error occured while updating note",
      },
    });
  }
};

controller.noteDelete = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const query = `UPDATE jobs SET note=null WHERE _id =${_id}`;
    await db.query(query);

    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: "Error at middleware controller.noteDelete",
      status: "501",
      message: {
        err: "error occured while removing note",
      },
    });
  }
};

module.exports = controller;
