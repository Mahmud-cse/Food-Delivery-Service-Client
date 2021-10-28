import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { GoogleLoginButton } from 'react-social-login-buttons';
import useAuth from '../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,setUser,setIsLoading}=useAuth();

    const history=useHistory();
    const location=useLocation();
    const url= location.state?.from || "/home"

    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then((result)=>{
            setUser(result.user);
            history.push(url);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode,errorMessage);
          })
          .finally(()=>setIsLoading(false));
    }
    return (
        <div style={{padding:"180px 0"}} >
            <Container >
            
                    <GoogleLoginButton align="center" onClick={handleGoogleLogin} style={{width:"300px",margin:"auto"}}/>

            </Container>
        </div>
    );
};

export default Login;