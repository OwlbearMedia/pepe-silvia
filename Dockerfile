FROM node:22 AS base

WORKDIR /pepe-silvia

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm@latest-10 && pnpm install

COPY . /pepe-silvia

RUN pnpm run build

ENV AWS_DEFAULT_REGION us-west-2

EXPOSE 3000/tcp

CMD ["pnpm", "start"]
