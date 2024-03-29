#stage 1
FROM node:21-alpine3.18 as builder
WORKDIR /app
COPY  package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn builder

#stage 2
FROM nginx:1.25.3
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
