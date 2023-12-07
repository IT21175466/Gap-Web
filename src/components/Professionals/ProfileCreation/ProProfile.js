import React from "react";
import Register_image from "./img/register.png";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import user from "./img/user.png";
import pen from "./img/pen.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function ProProfile() {
  return (
    <div>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            {/* Left Side Photo */}
            <div className="col-lg-5 vh-100 custom-bg d-flex align-items-center justify-content-center">
              <div className="vh-100 text-center">
                <img
                  src={Register_image}
                  className="img-fluid custom-image-LI"
                  alt="Regi Img"
                />

                <h1 className=" custom-text1 mb-3 mt-5">Welcome to GAP</h1>
                <h4 className="custom-text2">
                  Where opportunities meet aspiration, and success is just a
                  click away.
                </h4>
              </div>
            </div>
            <div className="col-lg-7 vh-100 overflow-auto">
              <h1 className="text-center mb-4 mt-5">HI Mahela !</h1>
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="form-outline">
                    <br></br>
                    <Col xs={5} md={3} className="mx-auto position-relative">
                      <Image src={user} rounded />
                      <Image
                        src={pen}
                        rounded
                        className="position-absolute bottom-0 end-0 cursor-pointer"
                        style={{ width: "40px", cursor: "pointer" }}
                      />
                    </Col>
            

                    <br></br>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Profession"
                    >
                      <Form.Control
                         type="Text"
                        placeholder="Profession"
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.51)",
                        }}
                      />
                    </FloatingLabel>
                    <br></br>
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Description*"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Description*"
                        style={{
                          height: "100px",
                          border: "1px solid rgba(0, 0, 0, 0.51)",
                        }}
                      />
                    </FloatingLabel>
                    <br></br>
                    <FloatingLabel
                      controlId="floatingInputGrid"
                      label="Linkedin Profile Link"
                    >
                      <Form.Control
                         type="Text"
                        placeholder="Linkedin Profile Link"
                        style={{
                          border: "1px solid rgba(0, 0, 0, 0.51)",
                        }}
                      />
                    </FloatingLabel>

                    <br />
                  </div>

                  <div className="text-center">
                    <button
                      className="btn custom-button-reset my-1 my-sm-3"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>

                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProProfile;
