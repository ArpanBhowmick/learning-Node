import express from "express"
import { deleteContactById, getAllContact, getContactById, getContactByUserId, newContact, updateContactById } from "../Controllers/contact.js";
import { isAuthenticated } from "../Middlewares/Auth.js";

const router = express.Router();

// new Contact
// api name: new Contact
// api method: post
// api endpoint: /api/contact/new
router.post("/new", isAuthenticated, newContact)

// get all contact 
router.get("/", getAllContact)

// get contact by ID 
router.get("/:id", getContactById)

// update Contact by ID 
router.put("/:id", isAuthenticated, updateContactById)

// delete contact ny ID 
router.delete("/:id", isAuthenticated, deleteContactById)

// get user specific contact 
router.get("/userid/:id", getContactByUserId)

export default router