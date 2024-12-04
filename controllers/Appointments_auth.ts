import { Response, Request } from "express";
import prisma from "../utils/prisma";

export const appoint = async (req: Request, res: Response): Promise<any> => {
  try {
    const { studentId, professorId, slot } = req.body;



    const availability = await prisma.availability.findFirst({
      where: {
        professorId,
        slot: new Date(slot),
        isBooked: false,
      },
    });
    console.log(availability);

    if (!availability) {
      return res.status(400).json({ error: "Time slot is unavailable or already booked" });
    }

   
    const appointment = await prisma.appointment.create({
      data: {
        studentId,
        professorId,
        slot: new Date(slot),
      },
    });

    await prisma.availability.update({
      where: { id: availability.id },
      data: { isBooked: true },
    });


    res.status(201).json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};


export const delAppointment = async (req: Request, res: Response): Promise<any> =>{
    try {
        const appointmentId = parseInt(req.params.id);
        console.log(appointmentId)
    
        const appointment = await prisma.appointment.delete({
          where: { id: appointmentId },
        });
        console.log(appointment);
        
    
        await prisma.availability.update({
          where: { slot: appointment.slot },
          data: { isBooked: false },
        });
    
        res.status(200).json({ message: 'Appointment cancelled successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
}