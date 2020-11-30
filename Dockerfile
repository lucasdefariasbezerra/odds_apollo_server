FROM node:12.18.1
COPY . /app

EXPOSE 4000
ENV BACKEND_URL=http://odds-micro:8080/api/
RUN cd /app/ && yarn install
CMD ["yarn", "--cwd","/app","start"]