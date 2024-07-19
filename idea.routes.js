
const idea_controoler = require("../controllers/idea.controllers")

/**
 * Route for
 * GET 127.0.0.1:2020/ideaApp/api/v1/ideas
 */

/* STITCHING ROUTE WITH SERVER */
module.exports = (app)=>{   //connect app to the route  //this exports the function with argument (app) so we can use in index.js

    app.get("/ideaApp/api/v1/ideas",idea_controoler.getAllIdeas)        //GET me jab bhi --> URI aaye to --> idea_controller me se --> getAllIdeas call krde
}