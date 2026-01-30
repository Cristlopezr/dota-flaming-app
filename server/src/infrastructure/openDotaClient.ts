import axios from 'axios';
import { HeroStats } from '../types/hero.types';
import { envs } from '../config/envs';

const OPENDOTA_BASE_URL = envs.OPEN_DOTA_API;

export class OpenDotaClient {
    async fetchHeroStats(): Promise<HeroStats[]> {
        const response = await axios.get<HeroStats[]>(`${OPENDOTA_BASE_URL}/heroStats`);
        return response.data;
    }
}

export const openDotaClient = new OpenDotaClient();
