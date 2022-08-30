const { Pool } = require('pg');
require('dotenv').config(); 
const PG_URI = 'postgres://yxnqaqec:JLu0tMjo_uzb075ZSbr8rlSOU1OnJDPo@jelani.db.elephantsql.com/yxnqaqec';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
      console.log('executed query', text);
      return pool.query(text,params, callback);
  },
}