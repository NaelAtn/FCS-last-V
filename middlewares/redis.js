require("dotenv").config();
const redis = require('ioredis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password : process.env.REDIS_PASSWORD
});

redisClient.on("connect", function() {
    console.log("Connected to Redis");
});

module.exports = redisClient;



