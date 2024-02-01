import React from 'react'
import MovieRow from './MovieRow';

const movies = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d1b54657285421.59cfc94f9e6b5.jpg",
    "https://img.freepik.com/free-vector/professional-suspense-movie-poster_742173-3470.jpg",
    "https://img.freepik.com/premium-photo/movie-poster-design_841014-8784.jpg",
    "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
    "https://i.pinimg.com/736x/b8/9b/a6/b89ba63ee5dc4fefdfcc4157767af9e4.jpg",
    "https://i.pinimg.com/474x/c8/a0/25/c8a025c1dd50816e75f84f6cc665c611.jpg",
    "https://i.pinimg.com/736x/48/61/3e/48613e3dfe4b8d590dbf5c04acbe2bd9.jpg",
    "https://i.pinimg.com/originals/37/18/94/371894fd517162a44e0983d38bf484de.jpg",
    "https://i.pinimg.com/736x/95/23/10/9523102b8b2e10c940c71e59fa1d4f50.jpg",
    "https://i.pinimg.com/originals/a9/18/b3/a918b3c45b6aec67bcfaa4fc9ca65637.jpg",
    "https://i.pinimg.com/originals/a9/18/b3/a918b3c45b6aec67bcfaa4fc9ca65637.jpg",
];

function Content(props) {
  return (
    <div>
        <MovieRow movies={movies} title = "Netflix Original" isNetflix={true}/>
        <MovieRow movies={movies} title = "Trending Movies"/>
        <MovieRow movies={movies} title = "Top Rating Movies"/>
        <MovieRow movies={movies} title = "Action Movies"/>
        <MovieRow movies={movies} title = "Comedy Movies"/>
        <MovieRow movies={movies} title = "Horror Movies"/>
        <MovieRow movies={movies} title = "Romance Movies"/>
        <MovieRow movies={movies} title = "Document"/>

    </div>
  )
}


export default Content;
