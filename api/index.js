// import './config/db.config.js';
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import routes from './routes';
import { CORS_OPTIONS } from './config/options';
// import { runJobs } from './jobs/cron';

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors(CORS_OPTIONS));
app.use(helmet());

routes(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    // runJobs();
    console.log(`Server    | Running on port - ${PORT}.`);
});
