import { Router, Request, Response} from "express";
import { updatePrice } from "./components/updatePrice/updatePrice";

const router = Router();

router.get("/", (req,res)=>{
    console.log(req)
    res.send("Salom")
})
router.get("/update-price", updatePrice)

export default router;