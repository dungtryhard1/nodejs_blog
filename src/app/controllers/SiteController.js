const Course = require("../models/course");
const { mutilpleMongooseToObject } = require("../../util/mongoose");

class SiteController {
  // get /
  index(req, res, next) {
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: mutilpleMongooseToObject(courses) });
      })
      .catch(next);
  }

  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
