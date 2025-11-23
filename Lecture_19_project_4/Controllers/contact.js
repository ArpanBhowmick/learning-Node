import { Contact } from "../Model/Contact.js";

// get all contact

export const getAllContact = async (req, res) => {
  const userContact = await Contact.find();

  if (!userContact)
    return res.json({ message: "No contact exists", success: false });

  res.json({ messsage: "All contact Fetched", userContact });
};


// create new contact

export const newContact = async (req, res) => {
  const { name, email, phone, type } = req.body;

  if (!name || !email || !phone || !type)
    return res.json({ message: "All fields are required", success: false });

  let saveContact = await Contact.create({
    name,
    email,
    phone,
    type,
    user: req.user
  });

  res.json({
    message: "Contact saved successfuly..!",
    saveContact,
    success: true,
  });
};


//  update contact by ID

export const updateContactById = async (req, res) => {
  const id = req.params.id;

  const { name, email, phone, type } = req.body;

  let updatedContact = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone, type },
    { new: true }
  );

  if(!updatedContact) return res.json({message: "No Contact Exists", success: false})

    res.json({message: "Contact Updated successfully",updatedContact, success: true})
};



// delete contact by ID

export const deleteContactById = async (req, res) => {
  const id = req.params.id;

  const deleteContact = await Contact.findByIdAndDelete(id);

  if(!deleteContact) 
    return res.json({message: "No contact to Exist", success: false});
  
  res.json({
    message: "Contact deleted Successfully...!",
    success: true
  })
  
}



//  get contact by ID

export const getContactById = async (req, res) => {
  const id = req.params.id; //params are used for dynamic routes

  const userContact = await Contact.findById(id);

  if (!userContact)
    return res.json({ message: "Co contact found", success: false });

  res.json({ message: "Contact fetched ", userContact, success: true });
}; 




// get contact by user ID

export const getContactByUserId = async (req, res) => {
  
  const id = req.params.id;

  const userContact = await Contact.find({user:id})
  if (!userContact)
    return res.json({ message: "Co contact found", success: false });

  res.json({ message: "User specific contact fetched ", userContact, success: true });

}




