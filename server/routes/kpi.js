import e from 'express';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) =>  {
    try {
      const kpis = await KPI.find();
      res.status(200).json(kpis);  
    } catch (error) {
        console.error(error);
        res.status(404).json({ message: error.message });
    }
})
export default router;
