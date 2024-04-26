FROM node:20 as builder

WORKDIR /app
ADD package-lock.json .
ADD package.json .
RUN npm install
ADD . .
RUN npx ng build --configuration production --output-path dist

FROM nginxinc/nginx-unprivileged:alpine
COPY --from=builder app/dist/browser /usr/share/nginx/html/
ADD mime.types /etc/nginx/mime.types
ADD default.conf /etc/nginx/conf.d/default.conf