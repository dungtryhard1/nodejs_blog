const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const methodOverride = require('method-override');
const route = require("./routes/index.routes");
const db = require("./config/db");

// connect to DB
db.connect();

const app = express();
const port = 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'))

// HTTP logger
// app.use(morgan('combined'));

// Template engine
// app.engine('handlebars', exphbs());
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    helpers: {
      sum: (a, b) => a + b,
    }
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
// app.set('views', './views');

//  Routes init
route(app);

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
