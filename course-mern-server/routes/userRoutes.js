import express from "express";
import { changePassword, getMyProfile, login, logout, register, updateProfile, updateProfilePicture } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.route("/register").post(register);

//login
router.route("/login").post(login);

//logout
router.route("/logout").post(logout);

//Get My Profile
router.route("/me").get(isAuthenticated, getMyProfile);

//change Password
router.route("/changepassword").put(isAuthenticated, changePassword);

//update the profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);

//update the profile picture
router.route("/updateprofilepicture").put(isAuthenticated, updateProfilePicture);



export default router;