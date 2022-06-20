var express = require('express');
var router = express.Router();

router.get('/', function (_req, res, _next) {
	res.render('views/home');
});

router.get('*', function (_req, res, _next) {
	res.render('mistakes/404');
});

module.exports = router;
