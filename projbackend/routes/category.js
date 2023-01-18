const express = require("express");
const router = express.Router();

const{getCategoryById, createCtegory, getCategory, getAllCategory, updateCategory, removeCtegory} = require("../controllers/category");
const{isSignedIn, isAuthenticated, isAdmin} = require("../controllers/auth");
const{getUserById} = require("../controllers/user");


//params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual Routes goes here

//create
router.post(
"/Category/create/:userId",
isSignedIn,
isAuthenticated,
isAdmin,
createCtegory
);

//read

router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

//update

router.put(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    updateCategory
  );

//delete

router.delete(
    "/Category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    removeCtegory
    );







module.exports = router;

