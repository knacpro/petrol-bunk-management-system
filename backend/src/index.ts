import express, {Express, Request, Response} from 'express';
import 'dotenv/config';
import routes from './routes/index';

const app: Express = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});