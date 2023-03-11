const mongoose= require ("mongoose")
//connect Database
mongoose.connect("mongodb+srv://bilkees:bilkees@cluster0.urlh5.mongodb.net/?retryWrites=true&w=majority")
//Schema
const Schema=mongoose.Schema;
var recipeSchema=new Schema({
    name:String,
    DurationofCooking:String,
    NumberOfServings:Number,
    Image:String
})
var RecipeInfo=mongoose.model("recipes",recipeSchema)
module.exports= RecipeInfo