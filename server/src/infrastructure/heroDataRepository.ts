import fs from 'fs/promises';
import path from 'path';
import { HeroStats } from '../types/hero.types';

const DATA_DIR = path.resolve(__dirname, '../../data');
const HERO_STATS_FILE = path.join(DATA_DIR, 'heroStats.json');

export class HeroDataRepository {
    async exists(): Promise<boolean> {
        try {
            await fs.access(HERO_STATS_FILE);
            return true;
        } catch {
            return false;
        }
    }

    async save(heroStats: HeroStats[]): Promise<void> {
        await fs.mkdir(DATA_DIR, { recursive: true });
        await fs.writeFile(HERO_STATS_FILE, JSON.stringify(heroStats, null, 2), 'utf-8');
    }

    async load(): Promise<HeroStats[]> {
        const content = await fs.readFile(HERO_STATS_FILE, 'utf-8');
        return JSON.parse(content) as HeroStats[];
    }
}

export const heroDataRepository = new HeroDataRepository();
