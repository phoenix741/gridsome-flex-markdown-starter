# Build application
FROM node:14-buster AS build

RUN apt-get update && apt-get install -y libgl1 libxi6

WORKDIR  /src/

COPY package*.json ./
RUN npm install
RUN npm install -g @gridsome/cli

COPY . .

RUN gridsome build

# Create the production image
FROM nginx:alpine

COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
