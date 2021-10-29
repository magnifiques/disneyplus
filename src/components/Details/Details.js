import React from "react"
import { Container,
         Background,
         ImageTitle,
         ContentMeta,
         Controls,
         Player,
         Trailer,
         AddList,
         GroupWatch,
         SubTitle,
         Description } from "./DetailsStyled"
import { useState, useEffect } from "react"
import { useParams } from "react-router"
import db from "../../firebase"




const Details = (props) => {

    const { id } = useParams();
    const [details, setdetails] = useState({})

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) => {
            if(doc.exists) {
                setdetails(doc.data());
            }
            else{
                console.log("no such a data");
            }
        }).catch((error) => console.log(error.message))
    },[id])

    return (
        <Container>
            <Background>
                <img 
                src={details.backgroundImg}
                alt={details.title} />
            </Background>

            <ImageTitle>
                <img
                src={details.titleImg}
                alt={details.title} />
            </ImageTitle>

            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" 
                             alt="playbutton" />
                        <span>Play</span>
                    </Player>

                    <Trailer>
                        <img src="/images/play-icon-white.png"
                            alt="Trailer" />
                        <span>Trailer</span>
                    </Trailer>

                    <AddList>
                        <span />
                        <span />
                    </AddList>

                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" 
                                 alt="group" />
                        </div>
                    </GroupWatch>
                </Controls>

                <SubTitle>{details.subTitle}</SubTitle>
                <Description>{details.description}</Description>
            </ContentMeta>
        </Container>
    )
}

export default Details
