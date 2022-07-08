import express from 'express';
import Router from './router/routes.js'
import * as path from 'path'

const app = express();
const port = 3000;

app.use('/images', express.static('public'));

app.use(Router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})