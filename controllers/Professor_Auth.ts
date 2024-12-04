import { Request,Response } from "express";
import prisma from "../utils/prisma";

export const availability = async (req: Request, res: Response): Promise<any> => {
    try {
      const professorId = parseInt(req.params.id);
      const { slot } = req.body;
  
      if (!slot) {
        return res.status(400).json({ error: 'Time slot is required' });
      }
  
      const availability = await prisma.availability.create({
        data: {
          professorId,
          slot: new Date(slot),
        },
      });
  
      res.status(201).json({ message: 'Availability added successfully', availability });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  


  export const getAvailability = async (req: Request, res: Response): Promise<any> => {
    try {
      
      const professorId = parseInt(req.params.id);
  
    
      if (isNaN(professorId)) {
        return res.status(400).json({ error: 'Invalid professor ID' });
      }
  
      
      const availableSlots = await prisma.availability.findMany({
        where: {
          professorId,
          isBooked: false,
        },
      });
 
      res.status(200).json({ availableSlots });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  };