import express from 'express';
import get from './routes/get';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yamljs';
import { handleError } from './routes/util/error';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(helmet());

// 非同期処理を含む get ハンドラーを .catch でラップ
// app.get('/', (req, res, next) => {
//   get(req, res).catch(next);
// });

// コンパイル後のdistディレクトリを指定
const swaggerDocument = yaml.load('./dist/docs/swagger.yaml');

console.log('👺👺');
console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.use((err: any, req: any, res: any, _next: any) => {
  console.log('👺👺');
  handleError(err, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
