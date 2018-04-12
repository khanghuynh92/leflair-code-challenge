const { Router } = require('express');
const { validate, add, minus, multiply, divide } = require('./controller');

const router = Router();

const RESOURCE = 'cal';

router.post(`/${RESOURCE}/add`, validate, add);
router.post(`/${RESOURCE}/minus`, validate, minus);
router.post(`/${RESOURCE}/multiply`, validate, multiply);
router.post(`/${RESOURCE}/divide`, validate, divide);

module.exports = router;
