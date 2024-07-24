const Course = require("../models/course");
const { mutilpleMongooseToObject } = require("../../util/mongoose");

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => {
        res.render("me/stored-courses", {
          courses: mutilpleMongooseToObject(courses)
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
