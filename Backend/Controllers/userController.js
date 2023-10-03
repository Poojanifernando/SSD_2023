// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { validationResult, sanitizeBody } = require("express-validator");
// const User = require("../Model/user.js");

// var jwtSecret = "mysecrettoken";

// const registerUser = async (req, res) => {
//   // Added a sanitization step using sanitizeBody('*').trim().escape()
//   // to sanitize all incoming request body fields
//   sanitizeBody('*').trim().escape();

//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, email, password, userRole, mobileno, address } = req.body;

//   if (!name || !email || !password || !mobileno || !address)
//     return res.status(400).json({ errorMessage: "Please fill all the fields..!!" });

//   if (name.length < 3)
//     return res.status(400).json({
//       errorMessage: "Name field is required..! (Min 3 charachtors)",
//     });

//   // Update the password length check:
// if (password.length < 8) {
//   return res.status(400).json({
//     errorMessage: "The length of the password should be at least 8 characters..!!",
//   });
// }

// // Add additional password policy checks:
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*()_+]).*$/;
// if (!passwordRegex.test(password)) {
//   return res.status(400).json({
//     errorMessage: "Password must contain at least one uppercase letter, one special character, and three numbers.",
//   });
// }

//   try {
//     // See if user exists
//     let user = await User.findOne({ email });

//     if (user) {
//       res.status(400).json({ errors: [{ msg: "User already exists" }] });
//     }
//     user = new User({
//       name,
//       mobileno,
//       email,
//       password,
//       address,
//       userRole,
//     });

//     //Encrypt Password
//     const salt = await bcrypt.genSalt(10);

//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     //Return jsonwebtoken
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
//       if (err) throw err;
//       res.json({ token, userRole: user.userRole, user: user.name });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// const authUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// const loginUser = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json([{ msg: "Invalid Credentials" }]);
//   }

//   const { email, password } = req.body;

//   try {
//     // See if user exists
//     let user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
//     }

//     //Return jsonwebtoken
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
//       if (err) throw err;
//       res.json({ token, user: user.name, userRole: user.userRole });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const getUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const users = await User.findById(id);

//     res.status(200).json(users);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const createUser = async (req, res) => {
//   const { name, email, password, userRole, mobileno, address } = req.body;

//   try {
//     // See if user exists
//     let user = await User.findOne({ email });

//     if (user) {
//       res.status(400).json({ errors: [{ msg: "User already exists" }] });
//     }
//     user = new User({
//       name,
//       mobileno,
//       email,
//       password,
//       address,
//       userRole,
//     });

//     //Encrypt Password
//     const salt = await bcrypt.genSalt(10);

//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     res.status(201).json(user);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password, userRole, mobileno, address } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No user with id: ${id}`);

//   const updatedUser = {
//     name,
//     mobileno,
//     email,
//     password,
//     address,
//     userRole,
//     _id: id,
//   };

//   await User.findByIdAndUpdate(id, updatedUser, { new: true });

//   res.json(updatedUser);
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await User.findByIdAndRemove(id);

//   res.json({ message: "User deleted successfully." });
// };

// module.exports = {
//   getUsers,
//   getUser,
//   deleteUser,
//   createUser,
//   updateUser,
//   registerUser,
//   authUser,
//   loginUser
// };

// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { validationResult, body } = require("express-validator");
// // his module is used for sanitizing HTML, preventing XSS attacks by cleaning user inputs
// const dompurify = require("dompurify");
// const User = require("../Model/user.js");

// const jwtSecret = "mysecrettoken";

// // This function takes a user object and uses dompurify to sanitize each property
// const sanitizeUser = (user) => {
//   return {
//     name: dompurify.sanitize(user.name),
//     mobileno: dompurify.sanitize(user.mobileno),
//     email: dompurify.sanitize(user.email),
//     address: dompurify.sanitize(user.address),
//     userRole: dompurify.sanitize(user.userRole),
//   };
// };

// const registerUser = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   const { name, email, password, userRole, mobileno, address } = req.body;

//   if (!name || !email || !password || !mobileno || !address)
//     return res
//       .status(400)
//       .json({ errorMessage: "Please fill all the fields..!!" });

//   if (name.length < 3)
//     return res.status(400).json({
//       errorMessage: "Name field is required..! (Min 3 charachtors)",
//     });

//   if (password.length < 8) {
//     return res.status(400).json({
//       errorMessage:
//         "The length of the password should be at least 8 characters..!!",
//     });
//   }

//   const passwordRegex =
//     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*()_+]).*$/;
//   if (!passwordRegex.test(password)) {
//     return res.status(400).json({
//       errorMessage:
//         "Password must contain at least one uppercase letter, one special character, and three numbers.",
//     });
//   }

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       res.status(400).json({ errors: [{ msg: "User already exists" }] });
//     }

//     user = new User({
//       name,
//       mobileno,
//       email,
//       password,
//       address,
//       userRole,
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
//       if (err) throw err;
//       const sanitizedUser = sanitizeUser(user);
//       res.json({
//         token,
//         userRole: sanitizedUser.userRole,
//         user: sanitizedUser.name,
//       });
//       // This ensures that user data displayed in responses is sanitized
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// const authUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     const sanitizedUser = sanitizeUser(user);
//     res.json(sanitizedUser);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// };

// const loginUser = async (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json([{ msg: "Invalid Credentials" }]);
//   }

//   const { email, password } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (!user) {
//       return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
//     }

//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
//       if (err) throw err;
//       const sanitizedUser = sanitizeUser(user);
//       res.json({
//         token,
//         user: sanitizedUser.name,
//         userRole: sanitizedUser.userRole,
//       });
//     });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server error");
//   }
// };

// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     const sanitizedUsers = users.map(sanitizeUser);
//     res.status(200).json(sanitizedUsers); 
//     // This ensures that user data retrieved from the database and sent in responses is also
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const getUser = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     const sanitizedUser = sanitizeUser(user);
//     res.status(200).json(sanitizedUser);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// const createUser = async (req, res) => {
//   const { name, email, password, userRole, mobileno, address } = req.body;

//   try {
//     let user = await User.findOne({ email });

//     if (user) {
//       res.status(400).json({ errors: [{ msg: "User already exists" }] });
//     }

//     user = new User({
//       name,
//       mobileno,
//       email,
//       password,
//       address,
//       userRole,
//     });

//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(password, salt);

//     await user.save();

//     const sanitizedUser = sanitizeUser(user);
//     res.status(201).json(sanitizedUser);
//     // When creating a new user, I sanitized the user data before sending it in the response
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };

// const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { name, email, password, userRole, mobileno, address } = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No user with id: ${id}`);

//   const updatedUser = {
//     name,
//     mobileno,
//     email,
//     password,
//     address,
//     userRole,
//     _id: id,
//   };

//   await User.findByIdAndUpdate(id, updatedUser, { new: true });

//   // After updating a user, I sanitized the updated user data before sending it in the response
//   const sanitizedUser = sanitizeUser(updatedUser);
//   res.json(sanitizedUser);
// };

// const deleteUser = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id))
//     return res.status(404).send(`No post with id: ${id}`);

//   await User.findByIdAndRemove(id);

//   res.json({ message: "User deleted successfully." });
// };

// module.exports = {
//   getUsers,
//   getUser,
//   deleteUser,
//   createUser,
//   updateUser,
//   registerUser,
//   authUser,
//   loginUser,
// };
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult, body } = require("express-validator");
const dompurify = require("dompurify");
const User = require("../Model/user.js");

const jwtSecret = "mysecrettoken";

// Sanitize user data using dompurify
const sanitizeUser = (user) => {
  return {
    name: dompurify.sanitize(user.name),
    mobileno: dompurify.sanitize(user.mobileno),
    email: dompurify.sanitize(user.email),
    address: dompurify.sanitize(user.address),
    userRole: dompurify.sanitize(user.userRole),
  };
};

const registerUser = async (req, res) => {
  // Validate request body properties and types
  const { name, email, password, userRole, mobileno, address } = req.body;

  if (!name || !email || !password || !mobileno || !address) {
    return res.status(400).json({ errorMessage: "Please fill all the fields..!!" });
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string' ||
    typeof mobileno !== 'string' || typeof address !== 'string') {
    return res.status(400).json({ errorMessage: 'Invalid data types in request body' });
  }

  if (name.length < 3) {
    return res.status(400).json({ errorMessage: "Name field is required..! (Min 3 characters)" });
  }

  if (password.length < 8) {
    return res.status(400).json({
      errorMessage: "The length of the password should be at least 8 characters..!!",
    });
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d.*\d)(?=.*[!@#$%^&*()_+]).*$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      errorMessage:
        "Password must contain at least one uppercase letter, one special character, and three numbers.",
    });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      mobileno,
      email,
      password,
      address,
      userRole,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      const sanitizedUser = sanitizeUser(user);
      res.json({
        token,
        userRole: sanitizedUser.userRole,
        user: sanitizedUser.name,
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const authUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const sanitizedUser = sanitizeUser(user);
    res.json(sanitizedUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json([{ msg: "Invalid Credentials" }]);
  }

  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, jwtSecret, { expiresIn: "1 days" }, (err, token) => {
      if (err) throw err;
      const sanitizedUser = sanitizeUser(user);
      res.json({
        token,
        user: sanitizedUser.name,
        userRole: sanitizedUser.userRole,
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const sanitizedUsers = users.map(sanitizeUser);
    res.status(200).json(sanitizedUsers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const sanitizedUser = sanitizeUser(user);
    res.status(200).json(sanitizedUser);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { name, email, password, userRole, mobileno, address } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    user = new User({
      name,
      mobileno,
      email,
      password,
      address,
      userRole,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const sanitizedUser = sanitizeUser(user);
    res.status(201).json(sanitizedUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, password, userRole, mobileno, address } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No user with id: ${id}`);

  const updatedUser = {
    name,
    mobileno,
    email,
    password,
    address,
    userRole,
    _id: id,
  };

  await User.findByIdAndUpdate(id, updatedUser, { new: true });

  const sanitizedUser = sanitizeUser(updatedUser);
  res.json(sanitizedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await User.findByIdAndRemove(id);

  res.json({ message: "User deleted successfully." });
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  createUser,
  updateUser,
  registerUser,
  authUser,
  loginUser,
};
