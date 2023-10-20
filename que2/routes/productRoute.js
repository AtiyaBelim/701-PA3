const route = require("express").Router();
const productRoute = require("../models/product");
const categoryRoute = require("../models/category");
const multer = require("multer");

route.get("/", async (req, res) => {
  try {
    const data = await productRoute.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

route.get("/productinsert", (req, res) => {
  //  res.sendFile(__dirname+'../src/app/add-prd/add-prd.component.html')
  categoryRoute
    .find()
    .then((category) => {
      // console.log(category);
      // console.log("hello");
      res.json(category);
    })
    .catch((err) => {
      res.json(err);
    });
});

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

route.post("/insert", upload.single("pimg"), (req, res) => {
  console.log(req.body);
  var prdData = new productRoute({
    pname: req.body.pname,
    cname: req.body.cname,
    pprice: req.body.pprice,
    pqty: req.body.pqty,
    pdesc: req.body.pdesc,
    pimg: req.body.pimg,
  });
  prdData
    .save(prdData)
    .then(() => {
      console.log("Data Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
route.get("/", (req, res) => {
  // res.sendFile(__dirname+'../src/app/app.component.html')
  Prd.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = route;
