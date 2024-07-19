/**
 * Write the logic to create the controllers for the idea resources
 */

const ideas = require("../models/ideas.models")


/** 
 * Create the controller for fetching all the ideas
 * 
 * GET 127.0.0.1:2020/ideaApp/api/v1/ideas
 * 
 * Return list of all the ideas
 */

exports.getAllIdeas = (req,res)=>{      //name of func = getAllIdeas & this is available everwhere bcz of (exports)  //As it is a controller so it has acces to all the req & res 

    // First read all the ideas from the idea model file(here line 5)

    ///return all those ideas
    res.status(200).send(ideas)

}
 