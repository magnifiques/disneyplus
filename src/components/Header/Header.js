/* eslint-disable */
import { auth, provider } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
    selectUserName,
    setUserLoginDetails,
    setSignOutState,
  } from "../../features/user/userSlice";
import { Nav,
         Logo,
         NavMenu,
         Login,
         UserImg,
         SignOut,
         DropDown,
         SignOutText } from "./HeaderStyled";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/personas';
import { useEffect, useState } from "react";


const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user) {
                setUser(user);
                history.push("/home");
            }
        })
        // eslint-disable-next-line
    }, [userName])

    const handleAuth = () => {

        if(!userName) {
        auth.signInWithPopup(provider).then((result) => {
            setFirstName(result.user.displayName)
            setUser(result.user); 

        }).catch((error) => alert(error.message));
        }
        else if(userName){
            auth.signOut().then(() => {
                dispatch(setSignOutState());
                setFirstName('')
                history.push("/");
            }).catch((error) => alert(error.message));
        }
    }

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        
    };

    let userProfile = createAvatar(style, {
        seed: `${userName}`,
        dataUri: true,
        eyes: ['open'],
        hair: ['long', 'sideShave', 'curlyHighTop', 'curly', 'pigtails', 'curlyBun', 'buzzcut', 'bobBangs', 'cap', 'extraLong', 'shortComboverChops'],
        mouth: ['smirk', 'smile']// ... and other options
      });

      
    return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt="Disney+" />
        </Logo>
        
        {!userName ?  <Login onClick={handleAuth}>LOGIN</Login>
         : <>
            <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt="HOME" />
                <span>HOME</span>
            </a>

            <a href="/home">
                <img src="/images/search-icon.svg" alt="SEARCH" />
                <span>SEARCH</span>
            </a>

            <a href="/home">
                <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
                <span>WATCHLIST</span>
            </a>

            <a href="/home">
                <img src="/images/original-icon.svg" alt="ORIGINAL" />
                <span>ORIGINAL</span>
            </a>

            <a href="/home">
                <img src="/images/movie-icon.svg" alt="MOVIE" />
                <span>MOVIE</span>
            </a>  

            <a href="/home">
                <img src="/images/series-icon.svg" alt="SERIES" />
                <span>SERIES</span>
            </a>  
            
            </NavMenu>
            <SignOut>
            <UserImg src={userProfile} alt={userName} referrerpolicy="no-referrer" />
            <DropDown>
                
                <SignOutText>Hello!</SignOutText>
                <SignOutText onClick={handleAuth}>SignOut</SignOutText>
            </DropDown>
            </SignOut>
        </>
        }
    </Nav>
    );
}

export default Header;
