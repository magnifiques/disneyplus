import React from "react"
import { Container,
         Content,
         Wrap } from "./NewDisneyStyled"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectNewDisney } from "../../features/movie/movieSlice"



const NewDisney = () => {

    const movies = useSelector(selectNewDisney);


    return (
        <Container>
            <h4>New to Disney+</h4>
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

export default NewDisney
