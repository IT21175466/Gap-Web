import React from 'react';
import Login_image from '../LoginPage/login.png';
import '../LoginPage/LoginPage.css';
import Apple_image from '../LoginPage/apple.png';
import Google_image from '../LoginPage/google.png';
import Linkedin_image from '../LoginPage/linkedin.png';


const LoginPage = () => {
    return (
        <>
            <div >
                <div className='row'>
                    <div className='col-5 text-center custom-bg full-height'>
                        <h1 className='custom-text1 ' >Logo</h1>
                        <img src={Login_image} alt='Your Image' className='img-fluid image-size' />
                        <h1 className=' custom-text2 my-3' >Welcome to GAP</h1>
                        <h4 className='custom-text3'>where opportunities meet aspiration, and success is just a click away.</h4>
                    </div>
                    <div className='col-7'>
                        <h1 className='custom-text4 text-center'>Login to Account</h1>
                        <form class="form-inline">
                            <select class="form-control custom-input" id="inlineFormCustomSelectPref">
                                <option selected>User Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input type="text" class="form-control custom-input" placeholder="User Name" />
                            <input type="password" id="inputPassword5" class="form-control custom-input" placeholder="Password" aria-describedby="passwordHelpBlock" />
                            
                        </form>
                        <h4 class="custom-text5">Forgot Password?</h4>

                        <div class="text-center">
                            <button class="btn custom-button2 my-1 my-sm-3" type="submit">Login</button>
                        </div>
                        <div class="text-center">
                            <h4 className='custom-text6'>Or, login with</h4>
                            <div className='Icon' >
                                <img src={Google_image} alt="Image 1" />
                                <img src={Linkedin_image} alt="Image 2" />
                                <img src={Apple_image} alt="Image 3" />
                            </div>
                        </div>
                        <h6 className='custom-text7'>Don't have an account? <span>Register</span></h6>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LoginPage;