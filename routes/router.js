const express = require("express");
const router = express.Router();
const translate = require('@iamtraction/google-translate');

router.get("/", (req, res, next) => {
  res.render("./pages/index");
});

router.get("/translate", (req, res, next) => {
  res.render("./pages/translate");
});

router.post("/submit", (req, res) => {
  let inputValue = req.body.inputField;
  console.log("Input value:", inputValue);

  translate(inputValue, { to: "en" })
    .then((translated) => {
      console.log("Translated text:", translated.text);
      res.send({ translatedText: translated.text });
    })
    .catch((err) => {
      console.error("Translation error:", err);
      res.status(500).send({ error: "Translation error" }); 
    });
});

module.exports = router;
