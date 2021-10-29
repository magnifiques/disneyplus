import React, { useEffect }  from "react"
import { Container } from "./HomeStyled";
import ImageSlider from "../ImageSlider/ImageSlider";
import Viewer from "../Viewer/Viewer";
import Recommended from "../Recommended/Recommended";
import NewDisney from "../NewDisney+/NewDisney";
import Trending from "../Trending/Trending";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName } from "../../features/user/userSlice";
import db from "../../firebase"
import Originals from "../Originals/Originals";


const Home = (props) => {

    const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("hello");
    db.collection("movies").onSnapshot((snapshot) => {
        // eslint-disable-next-line
      snapshot.docs.map((doc) => {
        
        switch (doc.data().type) {
          case "recommend":
              // eslint-disable-next-line
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
              // eslint-disable-next-line
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
              // eslint-disable-next-line
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
              // eslint-disable-next-line
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
              break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

    return(
        <Container>
            <ImageSlider />
            <Viewer />
            <Recommended />
            <Originals />
            <NewDisney />
            <Trending />
        </Container>
    )
}

export default Home;