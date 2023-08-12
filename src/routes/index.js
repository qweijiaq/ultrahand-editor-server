const router = require("koa-router")();
const { ENV } = require("../utils/env");
const packageInfo = require("../../package.json");
const testMysqlConn = require("../db/mysql2");

// 测试数据库连接
router.get("/api/db-check", async (ctx) => {
  // 测试 mysql 连接
  const mysqlRes = await testMysqlConn();

  ctx.body = {
    errno: 0,
    data: {
      name: "ultrahand editor server",
      version: packageInfo.version,
      ENV,
      mysqlConn: mysqlRes.length > 0,
    },
  };
});

module.exports = router;
