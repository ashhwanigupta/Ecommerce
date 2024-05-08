const express = require('express');
const { createUser, loginUserController, getAllUser, getUser, deleteUser, UpdatedUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword } = require('../controller/authController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post("/register",createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/change-password" ,authMiddleware, updatePassword)
router.post("/login", loginUserController);
router.get("/all-users", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin , getUser);

router.delete("/:id",deleteUser);
router.delete("/:id",deleteUser);
router.put("/edit-user", authMiddleware, UpdatedUser)
router.put("/block-user/:id", authMiddleware,isAdmin, blockUser)
router.put("/unblock-user/:id", authMiddleware,isAdmin, unblockUser)


module.exports = router;