import React, { useState } from 'react';
import Register_image from '../Student/Img/register.png';
import Apple_image from '../LoginPage/apple.png';
import Google_image from '../LoginPage/google.png';
import Linkedin_image from '../LoginPage/linkedin.png';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

const LoginPageS = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className=''>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center'>
                            <div className="vh-100 text-center">
                                <img src={Register_image} alt='Your Image' className='img-fluid custom-image-LI' />
                                <h1 className=' custom-text1 mb-3 mt-5' >Welcome to GAP</h1>
                                <h4 className='custom-text2'>Where opportunities meet aspiration, and success is just a click away.</h4>
                            </div>
                        </div>
                        <div className='col-lg-7 vh-100 '>
                            <h1 className='text-center mb-4 mt-5'>Register</h1>
                            <div className="row justify-content-center">
                                <div className="col-lg-9">
                                    <div className="form-outline">
                                        <Row className="">
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Control type="Text" size="lg" placeholder="First Name" />
                                            </Form.Group>

                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Control type="text" size="lg" placeholder="Last Name" />
                                            </Form.Group>
                                        </Row>
                                        <br />
                                        <Form.Control size="lg" type="email" placeholder="Email" />
                                        <br />
                                        <Form.Control size="lg"
                                            type="password"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Password"
                                        />
                                        <br />
                                        <Form.Control size="lg"
                                            type="password"
                                            id="inputPassword5"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Confirm Password"
                                        />
                                        <br />
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check
                                                type="checkbox"
                                                label={
                                                    <span>
                                                        By registering to GAP you agree to the{' '}
                                                        <u
                                                            style={{ cursor: 'pointer', color: 'blue' }}
                                                            onClick={handleShow}
                                                        >
                                                            terms & conditions
                                                        </u>
                                                    </span>
                                                }
                                                onChange={handleShow}
                                            // checked={true}
                                            />
                                        </Form.Group>
                                        <Modal
                                            size="lg"
                                            show={show}
                                            onHide={handleClose}

                                            aria-labelledby="example-custom-modal-styling-title"
                                        >
                                            <Modal.Header closeButton>

                                            </Modal.Header>

                                            <Modal.Body>
                                                <Modal.Title id="example-custom-modal-styling-title" className="text-center">
                                                    <h1 className='mb-1'>Terms & Conditions</h1>
                                                </Modal.Title>
                                                <div className='p-4'>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut condimentum eu arcu vel tempus. Ut faucibus id velit vel porttitor. Duis eu porttitor sem. Nulla elit nulla, elementum vel hendrerit id, malesuada nec eros. Donec sed turpis odio. Suspendisse id turpis non eros ornare pellentesque. Proin tempus hendrerit leo sit amet mattis. Quisque sit amet placerat lacus. Cras eu feugiat mauris. Nam tincidunt augue aliquam, sagittis nunc et, maximus dolor. Sed vel lorem eget diam bibendum aliquet. Etiam a nisl sed massa malesuada fringilla. Nunc venenatis ut magna ac lacinia.</p>

                                                <p>Sed cursus aliquam nulla, vel egestas nunc euismod in. Etiam condimentum eu dui nec porta. Sed erat turpis, sodales id tristique ut, finibus eu elit. Nulla luctus orci vel libero euismod, eget ullamcorper elit iaculis. Praesent vitae efficitur dui, ac convallis nisl. Sed tempor posuere lectus, vitae tempus tortor faucibus et. Sed sagittis in elit vitae blandit. Ut id malesuada tellus. Nullam eu lobortis nunc.
                                                    Praesent interdum porttitor augue, et mollis orci sollicitudin a. Sed interdum volutpat nisl, nec lobortis lacus mattis feugiat. Nulla</p>
                                                <p>
                                                    Sed cursus aliquam nulla, vel egestas nunc euismod in. Etiam condimentum eu dui nec porta. Sed erat turpis, sodales id tristique ut, finibus eu elit. Nulla luctus orci vel libero euismod, eget ullamcorper elit iaculis. Praesent vitae efficitur dui, ac convallis nisl. Sed tempor posuere lectus, vitae tempus tortor faucibus et. Sed sagittis in elit vitae blandit. Ut id malesuada tellus. Nullam eu lobortis nunc.
                                                    Praesent interdum porttitor augue, et mollis orci sollicitudin a. Sed interdum volutpat nisl, nec lobortis lacus mattis feugiat. Nulla
                                                    Sed cursus aliquam nulla, vel egestas nunc euismod in. Etiam condimentum eu dui nec porta. Sed erat turpis, sodales id tristique ut, finibus eu elit. Nulla luctus orci vel libero euismod, eget ullamcorper elit iaculis. Praesent vitae efficitur dui, ac convallis nisl. Sed tempor posuere lectus, vitae tempus tortor faucibus et. Sed sagittis in elit vitae blandit. Ut id malesuada tellus. Nullam eu lobortis nunc.
                                                    Praesent interdum porttitor augue, et mollis orci
                                                </p>
                                                </div>
                                                <div className='text-center'>
                                                <button className="btn  custom-button-reset my-1 my-sm-3 t" type="submit" >Agree</button>
                                                
                                                </div>
                                               
                                            </Modal.Body>
                                            
                                        </Modal>

                                    </div>

                                    <div className="text-center">
                                        <button className="btn custom-button-reset my-1 my-sm-3" type="submit" >Register</button>
                                    </div>
                                    <div class="text-center mb-4">
                                        <h4 className='mb-4'>Or, Register with</h4>
                                        <div className='Icon' >
                                            <img src={Google_image} alt="Image 1" />
                                            <img src={Linkedin_image} alt="Image 2" />
                                            <img src={Apple_image} alt="Image 3" />
                                        </div>
                                    </div>
                                    <h6 className='custom-text-AR'>Already have an account? <span>Login</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoginPageS;