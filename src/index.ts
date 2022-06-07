import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import productRouter from './routes/product';

const port: string = process.env.PORT || '3000';

const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use('/api/v1/', productRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port} for localhost`);
});
