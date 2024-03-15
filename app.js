const express = require("express");
const exphbs = require("express-handlebars");
const Router = require("./routes/router");
const bodyParser = require('body-parser');


const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

const handlebars = exphbs.create({
  defaultLayout: "layout",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use("/", Router);
app.use((req, res, next) => {
  res.render("./pages/404");
});




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`The server is running at "http://localhost:${PORT}/"`);
});
