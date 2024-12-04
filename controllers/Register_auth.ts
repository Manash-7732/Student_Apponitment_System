import bcryptjs from "bcryptjs";
import prisma from "../utils/prisma";
import { Response, Request } from "express";

export const professor = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Name, email, and password are required" });
    }

    console.log(name);
    
    const existingProfessor = await prisma.professor.findUnique({
      where: { email },
    });

    if (existingProfessor) {
      return res.status(409).json({ error: "Email already exists" }); 
    }

   
    const hashedPassword = await bcryptjs.hash(password, 10);

    
    const newProfessor = await prisma.professor.create({
      data: {
        name,
        email,
        password: hashedPassword, 
      },
    });

    res.status(201).json({
      message: "Professor created successfully",
      professor: {
        id: newProfessor.id,
        name: newProfessor.name,
        email: newProfessor.email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({ error: "Something went wrong" });
  }
};


export const student = async (req: Request, res: Response): Promise<any> => {
    try {
      const { name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
      }
  
      console.log(name);
      
      const existingStudent = await prisma.student.findUnique({
        where: { email },
      });
  
      if (existingStudent) {
        return res.status(409).json({ error: "Email already exists" }); 
      }
  
     
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      
      const newStudent = await prisma.student.create({
        data: {
          name,
          email,
          password: hashedPassword, 
        },
      });
  
      res.status(201).json({
        message: "Student created successfully",
        student: {
          id: newStudent.id,
          name: newStudent.name,
          email: newStudent.email,
        },
      });
    } catch (error) {
      console.error(error);
  
      res.status(500).json({ error: "Something went wrong" });
    }
  };
  


  export const stu = async (req: Request, res: Response): Promise<any> =>{
    try {
        const studentId = parseInt(req.params.id);
    
        const appointments = await prisma.appointment.findMany({
          where: { studentId },
          include: { professor: true },
        });
    
        res.status(200).json({ appointments });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
    
  }

  
  export const prof = async (req: Request, res: Response): Promise<any> =>{
    try {
        const professorId = parseInt(req.params.id);
    
        const appointments = await prisma.appointment.findMany({
          where: { professorId },
          include: { student: true },
        });
    
        res.status(200).json({ appointments });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong' });
      }
  }