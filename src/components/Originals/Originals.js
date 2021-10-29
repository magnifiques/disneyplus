import React from "react"
import { Container,
         Content,
         Wrap } from "./OriginalsStyled"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectOriginal } from "../../features/movie/movieSlice"

const Originals = (props) => {


    const movies = useSelector(selectOriginal);

    return (
        <Container>
            <h4>Originals</h4>
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

export default Originals
