FROM mhart/alpine-node:latest

RUN npm i -g yarn 

RUN yarn global add webpack webpack-cli webpack-dev-server 

WORKDIR /app


ADD ./app/package.json /app/
ADD ./app/webpack.config.js /app/
ADD ./app/.babelrc /app/
COPY ./app/src/ /app/src/

RUN yarn

CMD yarn start
