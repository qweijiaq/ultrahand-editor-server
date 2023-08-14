# Dockerfile
FROM node:16
WORKDIR /app
COPY . /app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
# 安装
RUN npm set registry https://registry.npm.taobao.org/
RUN npm i

# 启动
# npx pm2 log 是一个阻塞控制台的命令
CMD npm run prd-dev && npx pm2 log
