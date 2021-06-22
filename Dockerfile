FROM node:14.17

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY rollup.config.js ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY ./src ./src
COPY ./public ./public

RUN yarn build

EXPOSE 5000

CMD ["yarn", "start"]