'use strict';

const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
require('dotenv').config();

const db = require('./models');
const router = require('./router.js');

app.use(bodyParser());
app.use(router.routes());


(async () =>{
  try {
    console.log('sync start')
    await db.sequelize.sync();
    console.log('sync end')
  } catch (err) {
    console.log(err)
  }
  const port = process.env.PORT;
  app.listen(port);
  console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
})();
