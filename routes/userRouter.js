const router = require("express").Router();

router.get("/test", (req, res) => {
  res.send("Hello , it working");
});

module.exports = router;
