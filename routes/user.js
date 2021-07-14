const { Router } = require('express');
const {getUser, postUser, putUser} = require('../controller/user');

const router = Router()

router.get('/', getUser);


router.post('/', postUser);

router.put('/:id', putUser)


module.exports = router;