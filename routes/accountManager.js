/**
 * Created by danstan on 6/13/17.
 */
const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res,next) => {
    res.cookie("name","danstan",{maxAge:9000000})
    req.name="Danstan"
    next()
});


router.get('/', (req, res) => {
    res.cookie("name","danstan",{maxAge:9000000})
    res.render("",{
        title:"Home"
    });
});

module.exports = router;