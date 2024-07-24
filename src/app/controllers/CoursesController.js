const Course = require("../models/course");
const { moongooseToObject } = require("../../util/mongoose");

class CoursesController {
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/showDetail", { course: moongooseToObject(course) });
      })
      .catch(next);
  }

  // [GET] /courses/create
  create(req, res, next) {
    res.render("courses/create");
  }

  // [POST] /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    course
      .save()

      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }

  // [GET] /courses/edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then(course => res.render("courses/edit", { course: moongooseToObject(course) }))
      .catch(next);
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.findByIdAndUpdate(req.params.id, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }

  // [DELETE] /courses/delete/:id
  delete(req, res, next) {
    Course.findByIdAndDelete(req.params.id)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
}

module.exports = new CoursesController();
