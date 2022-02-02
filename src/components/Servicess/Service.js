export const GetData=(setApi)=>{
    fetch("https://moviesmern.herokuapp.com/movies/all")  
    .then(res=>res.json())
    .then(data=>setApi(data.data))
    .catch(res=>console.error(res)) 
}