const router = require('express').Router();
const ChildController = require('../controller/child.contoller');

router.post('/childEntry',ChildController.child_entry);

module.exports = router;