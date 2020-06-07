// Install and setup mongoose:
let mongoose = require('mongoose');
const dotenv = require('dotenv');
const Schema = mongoose.Schema;

const result = dotenv.config()
 
// DB Atlas connection 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connection successful')
  })
  .catch(err => {
    console.error('Database connection error')
  })


/*****************************************/
  
  // Create Shema 
  var peopleSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    age : Number,
    favoriteFoods : [String]
  });

  let peopleModel = mongoose.model('people', peopleSchema);

/*****************************************/


  /*

  // Create and Save a Record of a Model

  let people = new peopleModel({ name: 'nahla', age : 32, favoriteFoods : ["salade", "soupe","grillade mixte"]  });
  people.save(function (err, people) {
    if (err) console.log(err)
    console.log(people)
  })*/


/*****************************************/

//Create Many Records with model.create()

  /*let arrayOfPeople = [
    { name: 'nahla', age : 32, favoriteFoods : ["salade", "soupe","grillade mixte"]},
    { name: 'ala', age : 36, favoriteFoods : ["salade", "cheese cake","grillade mixte"]},
    { name: 'hana', age : 24, favoriteFoods : ["viennoiserie", "cheese cake","Pates"]}
  ];
  
  peopleModel.create(arrayOfPeople,function (err, people) {
    if (err) console.log(err)
    console.log(people)
  })*/

  /*****************************************/

  //Use model.find() to Search Your Database

  /*peopleModel.find( { name: "nahla" },function (err, people) {
    if (err) console.log(err)
    console.log(people)
  })*/


  /*******************************************/

  //Use model.findOne() to Return a Single Matching Document from Your Database

  /*peopleModel.findOne( { favoriteFoods: { "$in" : ["viennoiserie"]} },function (err, people) {
    if (err) console.log(err)
    console.log(people)
  })*/

  /********************************************/

  //Use model.findById() to Search Your Database By _id

 /* peopleModel.findById('5edd483fbecd8a1828249c05',function (err, people) {
    if (err) console.log(err)
      console.log(people)
    })


/*******************************************************/

//Perform Classic Updates by Running Find, Edit, then Save

 /* peopleModel.findById('5edd483fbecd8a1828249c05',function (err, people) {
    if (err) console.log(err)
    people.favoriteFoods.push('hamburger');
    people.save(function (err, people) {
      if (err) console.log(err)
      console.log(people)
    })
    
  })*/


/*******************************************************/


//Perform New Updates on a Document Using model.findOneAndUpdate()

/*const filter = { name: 'nahla' };
const update = { name: 'nahla shiri' };

peopleModel.findOneAndUpdate(filter, update, { new: true,upsert: true },function (err, people) {
  if (err) console.log(err)
    console.log(people)
  })*/


/********************************************************/

// Delete One Document Using model.findByIdAndRemove

 /* peopleModel.findByIdAndRemove ('5edd483fbecd8a1828249c05',function (err, people) {
    if (err) console.log(err)
      console.log(people)
  })*/


/****************************************************/

//MongoDB and Mongoose - Delete Many Documents with model.remove()

/*peopleModel.remove ({name :"Mary"},function (err, people) {
    if (err) console.log(err)
      console.log("delete all peoples having Mary name")
  })*/

/**************************************************/ 

//Chain Search Query Helpers to Narrow Search Results

peopleModel.find( { favoriteFoods: { "$in" : ["burrito"]}})
.sort({name:1})
.limit(2)
.select({name:true, favoriteFoods:true})
.exec()
.then (peoples => {console.log(peoples)})
.catch(err => {console.log(err)})