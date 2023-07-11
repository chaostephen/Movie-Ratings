const movieDatabase=require('./db.json')
let currentID=11


module.exports={
getMovies:(req, res)=>{
    res.status(200).send(movieDatabase)
},
addMovie:(req, res)=>{
    const {title, rating, imageURL } = req.body;
    movieDatabase.push({
        id:currentID,
        title:title,
        rating:rating,
        imageURL:imageURL
    })
    currentID++;
    res.status(200).send(movieDatabase)
}


}