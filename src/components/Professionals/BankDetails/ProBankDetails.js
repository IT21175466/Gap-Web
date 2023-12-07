import React from "react";
import Register_image from "./img/register.png";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
function ProBankDetails() {
  return (
    <div>
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
                <br></br>
                <br></br>
                <h1 className="text-center mb-1 mt-5">bank details</h1>
                <p className="text-center">
                  Enter valid bank details for payment requirements
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-9">
                    <div className="form-outline">
                      <br></br>

                      <br></br>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="account holder name*"
                      >
                        <Form.Control
                          type="Text"
                          placeholder="account holder name*"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.51)",
                          }}
                        />
                      </FloatingLabel>
                      <br></br>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Account number*"
                      >
                        <Form.Control
                          type="Text"
                          placeholder="Account number*"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.51)",
                          }}
                        />
                      </FloatingLabel>
                      <br></br>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="bank name*"
                      >
                        <Form.Control
                          type="Text"
                          placeholder="bank name*"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.51)",
                          }}
                        />
                      </FloatingLabel>
                      <br></br>
                      <FloatingLabel
                        controlId="floatingInputGrid"
                        label="Branch name*"
                      >
                        <Form.Control
                          type="Text"
                          placeholder="Branch name*"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.51)",
                          }}
                        />
                      </FloatingLabel>
                      <br></br>
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
    </div>
  );
}

export default ProBankDetails;
