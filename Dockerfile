ARG NODE_VERSION=16.13-alpine

# DEPENDENCIES STAGE
# Install dependencies only when needed
FROM node:${NODE_VERSION} AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# BUILD STAGE
# Rebuild the source code only when needed
FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# DEVELOPMENT STAGE
# Run the application in development mode
FROM node:${NODE_VERSION} AS development
ENV NODE_ENV development
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

CMD [ "npm", "run", "dev" ]
