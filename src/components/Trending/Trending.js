import React from "react"
import { Container,
         Content,
         Wrap } from "./TrendingStyled"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectTrending } from "../../features/movie/movieSlice"



const Trending = () => {

    const movies = useSelector(selectTrending);


    return (
        <Container>
            <h4>Trending Right Now</h4>
            <Content>
            {
                    // eslint-disable-next-line
                    movies && movies.map((movie, key) => (
                        
                        <Wrap key={key}>
                            {movie.id}
                            <Link to={`/details/${movie.id}`}>
                                <img src={movie.cardImg} alt={movie.title} />
                            </Link>
                        </Wrap>
                    ))
                }
            </Content>
        </Container>
    )
}

export default Trending
