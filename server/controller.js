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
},
deleteMovie:(req,res)=>{
    const id = +req.params.id;

    for(let i =0;i<movieDatabase.length;i++){
        if(movieDatabase[i].id===id){
            movieDatabase.splice(i,1)
            res.status(200).send(movieDatabase)
            return
        }
    }
    res.status(400).send("Movie not found")
}


}