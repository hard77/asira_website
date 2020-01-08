#base image
FROM node

# set working directory
RUN mkdir /opt/app-root
#copy all files from current directory to docker
COPY . /opt/app-root

WORKDIR /opt/app-root

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /opt/app-root/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

# start app
CMD npm install\
&& npm run build

### STAGE 2: Production Environment ###
FROM node

COPY --from=build /opt/app-root/build/ /opt/app-root/build/

EXPOSE 3000
