const Product = require("../models/User");
const {
     verifyTokenAndAuthorization,
     verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();

//Update
// router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
//      if (req.body.password) {
//           req.body.password = Crypto.arguments
//                .encrypt(req.body.password, process.env.key)
//                .toString();
//      }
//      try {
//           const updatedUser = await User.findByIdAndUpdate(
//                req.params.id,
//                {
//                     $set: req.body,
//                },
//                { new: true }
//           );
//           res.status(200).json(updatedUser);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// });

// Create

// router.post("/",verifyTokenAndAdmin, async (req, res) => {
//     const newProduct = new Product(req.body)
//     try {
//         const savedProduct = await newProduct.save()
//         res.status(200).json(savedProduct);
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })
router.post("/", verifyTokenAndAdmin, async (req, res) => {
     const newProduct = new Product(req.body);

     try {
         const savedProduct = await newProduct.save();
         console.log('savedProduct:', savedProduct)
          res.status(200).json(savedProduct);
     } catch (err) {
          console.log(err);
          res.status(500).json(err);
     }
});

// router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
//      try {
//           await User.findByIdAndDelete(req.params.id);
//           res.status(200).json("User has been deleted...");
//      } catch (error) {
//           res.status(500).json(error);
//      }
// });

// // get user
// router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
//      try {
//           const user = await User.findById(req.params.id);
//           const { password, ...others } = user._doc;

//           res.status(200).json(others);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// });
// // get all_user
// router.get("/", verifyTokenAndAdmin, async (req, res) => {
//      const query = req.query.new;
//      try {
//           const users = query
//                ? await User.find().sort({ _id: -1 }).limit(5)
//                : await User.find();
//           res.status(200).json(users);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// });

// // get user stats
// router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
//      const date = new Date();
//      const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
//      try {
//           const data = await User.aggregate([
//                { $match: { createdAt: { $get: lastYear } } },
//                {
//                     $project: {
//                          month: { $month: "$createdAt" },
//                     },
//                },
//                {
//                     $group: {
//                          _id: "$month",
//                          total: { $sum: 1 },
//                     },
//                },
//           ]);
//           res.status(200).json(data);
//      } catch (error) {
//           res.status(500).json(error);
//      }
// });

module.exports = router;
