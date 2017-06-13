/**
 * Created by danstan on 6/13/17.
 */
exports.homePage = (req,res) =>{
    res.render('index', {
        title:"Home"
    })
}

exports.addStore = (req,res) =>{
    res.send("Works")
}