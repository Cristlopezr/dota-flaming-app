import { HeroStats } from '../types/hero.types';
import { heroDataRepository } from '../infrastructure/heroDataRepository';
import { openDotaClient } from '../infrastructure/openDotaClient';

class HeroService {
    private heroes: HeroStats[] = [];

    async getHeroes(): Promise<HeroStats[]> {
        if (this.heroes.length > 0) {
            return this.heroes;
        }

        if (await heroDataRepository.exists()) {
            this.heroes = await heroDataRepository.load();
            return this.heroes;
        }

        this.heroes = await openDotaClient.fetchHeroStats();
        await heroDataRepository.save(this.heroes);
        return this.heroes;
    }
}

export const heroService = new HeroService();
