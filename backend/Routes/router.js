const express = require("express");
const router = new express.Router();
const controllers = require('../Controllers/usersControllers.js')
const upload = require('../multerConfig/storageConfiq.js')
const { RegistrationController, loginController } = require('../Controllers/authController.js');



// routes
router.post("/user/register", upload.single("user_profile"), controllers.userpost);
router.get("/user/details", controllers.userget);
router.get("/user/:id", controllers.singleuserget);
router.put("/user/edit/:id", upload.single("user_profile"), controllers.useredit);
router.delete("/user/delete/:id", controllers.userdelete);
router.put("/user/status/:id", controllers.userstatus);
router.get("/userexport", controllers.userExport);



// Method POST / Route Register
router.post("/register", RegistrationController)
// Method POST / Route Login
router.post("/login", loginController)




module.exports = router