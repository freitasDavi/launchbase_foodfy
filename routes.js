const express = require('express')
const routes = express.Router()

const recipes = require("./data")

routes.get("/", function(req, res) {
    return res.render("index", { recipes })
})

routes.get("/about", function(req, res) {
    return res.render("about")
})

routes.get("/receitas", function(req, res) {
    return res.render("receitas", { recipes })
})

routes.get("/recipes/:index", function(req, res) {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex]
    return res.render("recipe", {recipe})
})

module.exports = routes