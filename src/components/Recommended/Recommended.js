import React from "react"
import { Container,
         Content,
         Wrap } from "./RecommendedStyled"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectRecommend } from "../../features/movie/movieSlice"

const Recommended = () => {

    const movies = useSelector(selectRecommend);

    return (
        <Container>
            <h4>Recommended For You</h4>
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

export default Recommended
