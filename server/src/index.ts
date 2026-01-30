import app from './app';
import { envs } from './config/envs';

app.listen(envs.PORT, () => {
    console.log(`[Server] Running on http://localhost:${envs.PORT}`);
});
