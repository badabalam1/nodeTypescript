import * as express from 'express';
const app = express();

import { auth } from './routes';

app.get('/', auth.signin);

export default app; 