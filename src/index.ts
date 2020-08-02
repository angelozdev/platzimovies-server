import app from './server';
import { config } from '../config';
import connect from './database';

connect();

app.listen(config.PORT, () => {
   console.clear();
   console.log(`Server listening at http://localhost:${config.PORT}`);
});
