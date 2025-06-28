#设置构建的基础镜像
FROM node:20
RUN mkdir -p /project/
WORKDIR /project/
COPY package.json /project/
#设置npm下载依赖来源为淘宝源
RUN rm -rf node_modules && npm install -g npm && cd /project
#安装项目依赖
RUN npm install
COPY . /project/
# CMD npm run dev
EXPOSE 5500
