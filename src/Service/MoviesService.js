let movies=[
    {
    index:0,
    id:1,
    name:'die hard',
    genre: 'action',
    length:'2:20',
},
    {
    index:1,
    id:2,
    name:'die hard 2',
    genre:'action',
    length:'2:30',
},
    {
    index:2,
    id:3,
    name:'fast five',
    genre: 'action',
    length:'3:00',
},

];
let names=[{
    first:''
},
{
    last:''
},
]

// export delete
// export Pach

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find(m=>m.id==id)
}

// export function   deleteMovie(e) {
//     let target = e.target.id;
//     let filteredMovies = movies.filter(
//       (movie) => movie.id != target
//     );
//     movies=filteredMovies;
//     return movies
//   }
  export function patchMovie(e) {
    let target = e.target.id;
    movies[target].name='null'
    return movies
  }

