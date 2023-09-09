import React from 'react'
import {connect} from 'react-redux'
import moviesReducer from '../duck'

const MoviesContainer = ({movies}) =>
<ul>
    {movies.list.map(movie => <li>{movie}</li> )}
</ul>

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps,{})(MoviesContainer)