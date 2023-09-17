const usersModel = require('../models/usersModelSchema')
const { hashPassword, comparePassword } = require('../Helpers/authHelp')
const JWT = require('jsonwebtoken')


const RegistrationController = async (req, res) => {
    try {
        const { name, email, password} = req.body
        if (!name) {
            return res.send({ msg: "Name is required" })
        }
        if (!email) {
            return res.send({ msg: "email is required" })
        }
        if (!password) {
            return res.send({ msg: "password is required" })
        }


        const existingUser = await usersModel.findOne({ email });
        if (existingUser) {
            return res.status(200).send({
                success: false,
                msg: "User already exists",
            });
        }

        const hashedPassword = await hashPassword(password);
        const user = await new usersModel({
            name,
            email,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            msg: "User created successfully",
            user,
        });

    } catch (error) {
        console.log(error.msg)
        res.status(500).send({
            success: false,
            msg: "Error in registration",
            error
        })
    }
}

// Login


const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(400).send({ msg: "Email or password is required" });
      }
  
      const user = await usersModel.findOne({ email });
      if (!user) {
        return res.status(404).send({ msg: "Email not found" });
      }
  
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(401).send({ msg: "Incorrect password" });
      }
  
      const token = JWT.sign({ _id: user._id }, process.env.JWT_KEY, {
        expiresIn: '7d',
      });
  
      res.status(200).send({
        success: true,
        msg: "Logged in successfully!",
        user: {
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        success: false,
        msg: "Invalid login details",
        error: error.message,
      });
    }
  };


module.exports = { RegistrationController, loginController }