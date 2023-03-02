import React from 'react'
import './Login.css'
import Button from '@mui/material/Button';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user,
            });
        })
        .catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
      <div className="login__logo">
        <img 
        src="https://cdn-icons-png.flaticon.com/512/124/124010.png"
        alt=""
        />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1920px-Facebook_Logo_%282019%29.svg.png" alt="" />        
      </div>
      <Button type="submit"
        onClick={signIn}
        variant='contained'
      >
        Sign In
      </Button>
    </div>
  )
}

export default Login
