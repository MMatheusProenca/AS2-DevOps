FROM cypress/base:10
 
WORKDIR /app
COPY . /app 

RUN npm install cypress

CMD npm run test:search; \
npm run cucumber:report

