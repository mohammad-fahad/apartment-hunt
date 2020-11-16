import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import NavBar from '../../HomePage/NavBar';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import './Login.scss';
import google from '../../../logos/Group 573.png';
import fb from '../../../logos/Group 2.png';
import { userContext } from '../../../App';

const Login = () => {
    const [user, setUser] = useContext(userContext);
    const [newUser, setNewUser] = useState(false);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleLogIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const googleNewUser = { name: displayName, email: email }
            setUser(googleNewUser);
            history.replace(from);
        })
            .catch(function (error) {
                console.log(error.message);
            });
    }
    const fbLogIn = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
            .then(function (result) {
                const { displayName, email } = result.user;
                const googleNewUser = { name: displayName, email: email }
                setUser(googleNewUser);
                history.replace(from);

            }).catch(function (error) {
                console.log(error.message);
            });
    }
    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    history.replace(from);
                    user.updateProfile({
                        displayName: user.name,
                    })

                })
                .catch(function (error) {
                    const newUserInfo = { ...user };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    const googleNewUser = { name: displayName, email: email }
                    setUser(googleNewUser);
                    history.replace(from);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.message = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.preventDefault();
    }
    const handleChange = (e) => {
        let emailValid = true;
        if (e.target.name === 'Fname') {
            emailValid = e.target.value;
            console.log(emailValid);
        }
        if (e.target.name === 'Lname') {
            emailValid = e.target.value;
            console.log(emailValid);
        }
        if (e.target.name === 'email') {
            emailValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(emailValid);
        }
        if (e.target.name === "password") {
            const passwordValid = e.target.value.length >= 6;
            emailValid = passwordValid;
            console.log(emailValid);
        }
        if (emailValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
            console.log(newUserInfo);
        }
    }
    return (
        <>
            <NavBar />
            <div className="form_wrapper mt-5">
                <div className='container pt-5'>
                    <div className="row d-flex align-items-center pt-5">
                        <div className="col-md-6 offset-3">
                            <Form className='loginFrom' onSubmit={handleSubmit}>
                                <h4>{!newUser ? <h3>Login</h3> : <h3>Create new account</h3>}</h4>
                                {newUser && <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='Fname' className='formInput' type="text" placeholder="First Name" />
                                </Form.Group>}
                                {newUser && <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='Lname' className='formInput' type="text" placeholder="Lest Name" />
                                </Form.Group>}
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='email' className='formInput' type="email" placeholder="Username Or Email" />
                                </Form.Group>
                                <Form.Group className='mt-4'>
                                    <Form.Control onBlur={handleChange} name='password' className='formInput' type="password" placeholder="Password" />
                                </Form.Group>
                                {!newUser &&
                                    <Form.Group className='forgot d-flex justify-content-between'>
                                        <Form.Check type="checkbox" label="Remember Me " />
                                        <Link className='password' style={{ color: '#275A53' }}>Forgot Password</Link>
                                    </Form.Group>
                                }
                                <div className='d-flex justify-content-center'>
                                    {!newUser ? <input className='logInBtn' variant="primary" type="submit" value='Log In' /> :
                                        <input className='logInBtn' variant="primary" type="submit" value='Sign Up' />}
                                </div>
                                <div className='text-center'>
                                    <span>
                                        {newUser ? 'You already have an account?' : 'Don’t have an account?'}
                                        <Link className='ml-1' style={{ color: '#275A53' }} to='/login' onClick={() => setNewUser(!newUser)}>
                                            {newUser ? "Login" : "create new account"}
                                        </Link>
                                    </span>
                                </div>
                            </Form>

                            <div className="formSocial">
                                <div className='d-flex justify-content-center'>
                                    <span></span>
                                    <h6>OR</h6>
                                    <span></span>
                                </div>
                                <div className='fbToGoogle'>

                                    <div className='google btn d-flex' onClick={fbLogIn}>
                                        <img src={google} className='mr-5' style={{ height: '2rem' }} alt="" />
                                        <h6>Continue with Facebook</h6>
                                    </div> <br />

                                    <div className='facebook btn d-flex align-center' onClick={googleLogIn}>
                                        <img src={fb} className="mr-5" style={{ height: '2rem' }} alt="" />
                                        <h6>Continue with Google</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;