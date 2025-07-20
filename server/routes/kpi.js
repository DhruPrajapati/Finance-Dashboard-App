import express from 'express';
import KPI from '../models/KPI.js';

const router = express.Router();

router.get('/', async (req, res) =>  {
    try {
      const kpis = await KPI.find();
      console.log("fetching data"+kpis);
      res.status(200).json(kpis);  
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
})
export default router;
