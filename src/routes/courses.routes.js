const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

router.get('/edit/:id', coursesController.edit);
router.put('/:id', coursesController.update);

router.delete('/delete/:id', coursesController.delete);


module.exports = router;
