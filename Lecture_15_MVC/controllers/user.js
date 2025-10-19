import { User } from "../Models/User.js";

export const userRegister = async (req, res) => {
  // console.log("gettign the data from body" , req.body)

  try {
    let user = await User.create(req.body);
    res.json({
      message: "User created successfully...!",
      Newuser: user,
      success: true,
    });
  } catch (error) {
    res.json({message: error.message})
  }
}





