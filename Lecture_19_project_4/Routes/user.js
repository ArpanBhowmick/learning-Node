import express from "express"
import { login, register } from "../Controllers/user.js";


const router = express.Router();

// User Register 
// @api Name :- user Register
// @api method:-post
// @api endpoint :- /api/user/register

router.post('/register', register)

// User Login 
// @api Name :- user Login
// @api method:-post
// @api endpoint :- /api/user/Login

router.post('/login', login)

export default router



