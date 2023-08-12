/**
 * @description 连接 redis
 * @author Jia Wei
 */

const redis = require('redis')
const { redisConf } = require('../config/index')

// 创建客户端
const { port, host, password } = redisConf
const opt = {}
if (password) {
    opt.password = password // prd 环境需要密码
}
const redisClient = redis.createClient(port, host, opt)

redisClient.on('error', err => {
    console.error('redis connect error', err)
})

// 可运行 node src/db/redis.js 测试连接
// redisClient.on("connect", async () => {
//   console.log("redis connect success");

//   await redisClient.set("foo", "bar", redis.print); // => "Reply: OK"
//   await redisClient.get("foo", redis.print); // => "Reply: bar"
//   redisClient.quit();
// });

module.exports = redisClient
