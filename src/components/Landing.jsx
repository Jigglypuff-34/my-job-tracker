/* eslint-disable linebreak-style */
import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: {
      duration: 2,
    },
  },
};

function Landing() {
  return (
    <Box className="landing">
      <motion.svg width="300" height="320px">
        <defs>
          <clipPath id="id1">
            <motion.path
              d="M 37 59 L 296 59 L 296 314 L 37 314 Z M 37 59 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id2">
            <motion.path
              d="M 37.5 124.503906 L 187.617188 59.722656 L 295.785156 310.378906 L 145.664062 375.160156 Z M 37.5 124.503906 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id3">
            <motion.path
              d="M -7.304688 20.671875 L 303.949219 -113.644531 L 456.988281 240.996094 L 145.730469 375.3125 Z M -7.304688 20.671875 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id4">
            <motion.path
              d="M 78 42 L 295 42 L 295 309 L 78 309 Z M 78 42 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id5">
            <motion.path
              d="M 78.226562 76.550781 L 238.203125 42.785156 L 294.585938 309.898438 L 134.609375 343.664062 Z M 78.226562 76.550781 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id6">
            <motion.path
              d="M 54.875 -34.09375 L 386.566406 -104.109375 L 466.335938 273.816406 L 134.644531 343.828125 Z M 54.875 -34.09375 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
          <clipPath id="id7">
            <motion.path
              d="M 130 37.5 L 293.386719 37.5 L 293.386719 310.5 L 130 310.5 Z M 130 37.5 "
              clip-rule="nonzero"
              initial={{
                opacity: 0,
                rotate: -45,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                rotate: 0,
                scale: 1,
              }}
              transition={{
                duration: 5,
                ease: "linear",
              }}
            />
          </clipPath>
        </defs>
        <g clip-path="url(#id1)">
          <g clip-path="url(#id2)">
            <g clip-path="url(#id3)">
              <motion.path
                fill="#f4f6fc"
                d="M 219.40625 118.238281 C 162.269531 97.957031 97.800781 98.144531 37.78125 124.042969 L 119.699219 313.875 C 179.71875 287.972656 244.1875 287.789062 301.324219 308.066406 C 325.765625 252.585938 370.125 205.808594 430.144531 179.90625 L 348.226562 -9.925781 C 288.207031 15.976562 243.847656 62.753906 219.40625 118.238281 Z M 193.003906 57.058594 C 221.546875 44.742188 234.730469 11.519531 222.40625 -17.039062 C 210.078125 -45.601562 176.867188 -58.800781 148.320312 -46.484375 C 119.777344 -34.167969 106.597656 -0.945312 118.921875 27.617188 C 131.246094 56.175781 164.460938 69.378906 193.003906 57.058594 Z M 193.003906 57.058594 "
                fill-opacity="1"
                fill-rule="nonzero"
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
              />
            </g>
          </g>
        </g>
        <g clip-path="url(#id4)">
          <g clip-path="url(#id5)">
            <g clip-path="url(#id6)">
              <motion.path
                fill="#233dff"
                d="M 257.769531 106.433594 C 205.78125 75.242188 142.554688 62.65625 78.59375 76.15625 L 121.296875 278.449219 C 185.253906 264.949219 248.484375 277.539062 300.46875 308.730469 C 335.417969 259.1875 388.164062 222.121094 452.125 208.621094 L 409.425781 6.324219 C 345.464844 19.828125 292.71875 56.894531 257.769531 106.433594 Z M 244.011719 41.242188 C 274.425781 34.820312 293.925781 4.867188 287.503906 -25.566406 C 281.078125 -56.003906 251.136719 -75.523438 220.71875 -69.101562 C 190.300781 -62.679688 170.800781 -32.726562 177.226562 -2.292969 C 183.652344 28.144531 213.59375 47.660156 244.011719 41.242188 Z M 244.011719 41.242188 "
                fill-opacity="1"
                fill-rule="nonzero"
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 5,
                  ease: "linear",
                }}
              />
            </g>
          </g>
        </g>
        <g clip-path="url(#id7)">
          <motion.path
            fill="#5cb6f9"
            d="M 299.386719 103.820312 C 254.960938 62.5625 195.699219 37.191406 130.328125 37.191406 L 130.328125 243.941406 C 195.699219 243.941406 254.960938 269.316406 299.386719 310.574219 C 343.8125 269.316406 403.078125 243.941406 468.445312 243.941406 L 468.445312 37.191406 C 403.078125 37.191406 343.8125 62.5625 299.386719 103.820312 Z M 299.386719 37.191406 C 330.476562 37.191406 355.742188 11.910156 355.742188 -19.195312 C 355.742188 -50.304688 330.476562 -75.582031 299.386719 -75.582031 C 268.300781 -75.582031 243.035156 -50.304688 243.035156 -19.195312 C 243.035156 11.910156 268.300781 37.191406 299.386719 37.191406 Z M 299.386719 37.191406 "
            fill-opacity="1"
            fill-rule="nonzero"
            initial={{
              opacity: 0,
              rotate: -45,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              rotate: 0,
              scale: 1,
            }}
            transition={{
              duration: 5,
              ease: "linear",
            }}
          />
        </g>
      </motion.svg>
    </Box>
  );
}

export default Landing;
