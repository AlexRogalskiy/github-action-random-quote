FROM node:lts-alpine

LABEL version="0.0.0-dev"
LABEL repository="https://github.com/AlexRogalskiy/github-action-random-quote"
LABEL homepage="https://github.com/AlexRogalskiy/github-action-random-quote"
LABEL maintainer="Nullables, Inc. <hello@nullables.io> (https://nullables.io)"

LABEL "com.github.actions.name"="GitHub action for random quotes"
LABEL "com.github.actions.description"="Automatically generates random quotes on issues/pull requests by provided parameters"
LABEL "com.github.actions.icon"="image"
LABEL "com.github.actions.color"="yellow"

# Copy project sources
COPY dist/index.js .

COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm install

# Run package bundle
ENTRYPOINT ["node", "/index.js"]
