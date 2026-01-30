import 'dotenv/config';
import { get } from 'env-var';

export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    OPEN_DOTA_API: get('OPEN_DOTA_API').required().asString(),
};
