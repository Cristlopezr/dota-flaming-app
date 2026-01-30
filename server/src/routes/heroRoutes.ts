import { Router, Request, Response } from 'express';
import { heroService } from '../services/heroService';

const router = Router();

router.get('/heroes', async (req: Request, res: Response) => {
    try {
        const heroes = await heroService.getHeroes();
        res.json(heroes);
    } catch (error) {
        console.error('[HeroRoutes] Error fetching heroes:', error);
        res.status(503).json({
            error: 'Hero data not available',
            message: 'Could not load hero data. Please try again later.',
        });
    }
});

export default router;
