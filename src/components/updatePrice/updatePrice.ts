import { Request, Response } from "express"

export const updatePrice = (req:Request, res:Response)=>{
    res.status(200).json({data:"updatePrice page"})
}