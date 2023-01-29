import express from "express"; 
import {login} from "../controllers/auth"; 

const router = express.Router(); 
// /auth/login으로 들어오게 된다
router.post("/login", login) ; 
