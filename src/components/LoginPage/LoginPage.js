import React from 'react';
import Login_image from '../LoginPage/login.png';
import '../LoginPage/LoginPage.css';
import Apple_image from '../LoginPage/apple.png';
import Google_image from '../LoginPage/google.png';
import Linkedin_image from '../LoginPage/linkedin.png';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {
    return (
        <>
            <section className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center'>
                            <div className="vh-100 text-center">
                                <img src={Login_image} alt='Your Image' className='img-fluid custom-image-LI' />
                                <h1 className=' custom-text1 mb-3 mt-5' >Welcome to GAP</h1>
                                <h4 className='custom-text2'>where opportunities meet aspiration, and success is just a click away.</h4>
                            </div>
                        </div>
                        <div className='col-lg-7 vh-100 '>
                            <h1 className='text-center mb-5 mt-5'>Login to Account</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="form-outline">
                                        <Form.Select size="lg" placeholder="New Password">
                                            <option>User Type</option>
                                            <option>User Type</option>
                                            <option>User Type</option>
                                            <option>User Type</option>
                                        </Form.Select>
                                        <br />
                                        <br />
                                        <Form.Control size="lg" type="text" placeholder="User Name" />
                                        <br />
                                        <br />
                                        <Form.Control size="lg"
                                            type="password"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <h5 className='mb-4 mt-2 custom-text-FP'>Forgot password?</h5>
                                    <div className="text-center">
                                        <button className="btn custom-button-reset my-1 my-sm-3" type="submit" >Login</button>
                                    </div>
                                    <div class="text-center mb-4">
                                        <h4 className='mb-4'>Or, login with</h4>
                                        <div className='Icon' >
                                            <img src={Google_image} alt="Image 1" />
                                            <img src={Linkedin_image} alt="Image 2" />
                                            <img src={Apple_image} alt="Image 3" />
                                        </div>
                                    </div>
                                    <h6 className='custom-text-AR'>Don't have an account? <span>Register</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPage;