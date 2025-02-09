import React, { useState, useRef, useEffect } from "react"
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { SITEKEY_RECAPTCHA } from "../../utils/constants";

const Contact = () => {
  const [isChecked, setIsCheked] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const handleRecaptchaChange = e => {
    if (e) {
      setIsCheked(true);
    } else {
      setIsCheked(false);
    }
  };

  const formRef = useRef();

  const onSubmit = (data) => {
    formRef.current.action="https://getform.io/f/d999c149-6324-4e0c-b5ab-4b23b272d30d";
    formRef.current.method="POST";
    formRef.current.submit();
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="bg-7ccde2 contact-area">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-info">
                <h3>Enough talk, let's build something</h3>
                <p>
                  Want to transform your business using SAP integration or need
                  consulting?
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-content">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      className={errors?.fullName ? "error-input form-control" : "form-control"}
                      id="name"
                      name="name"
                      placeholder="Name *"
                      maxLength={100}
                      {...register("fullName", {
                        required: true,
                      })}
                    />
                    {errors?.fullName?.type === "required" && <p className="error-msg">This field is required</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className={errors?.email ? "error-input form-control" : "form-control"}
                      id="email"
                      name="email"
                      placeholder="Email *"
                      maxLength={100}
                      {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                    />
                    {errors?.email?.type === "required" && <p className="error-msg">This field is required</p>}
                    {errors?.email?.type === "pattern" && <p className="error-msg">Email is invalid</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={errors?.subject ? "error-input form-control" : "form-control"}
                      id="subject"
                      name="subject"
                      placeholder="Subject *"
                      maxLength={100}
                      {...register("subject", {
                        required: true,
                      })}
                    />
                    {errors?.subject?.type === "required" && <p className="error-msg">This field is required</p>}
                  </div>
                  <div className="form-group">
                    <textarea
                      rows="5"
                      className={errors?.message ? "error-input form-control" : "form-control"}
                      id="message"
                      name="message"
                      placeholder="Message *"
                      {...register("message", {
                        required: true,
                      })}
                    />
                    {errors?.message?.type === "required" && <p className="error-msg">This field is required</p>}
                  </div>
                  <div style={{marginBottom: "16px"}}>
                     <ReCAPTCHA sitekey={SITEKEY_RECAPTCHA} onChange={handleRecaptchaChange} />
                  </div>
                  <div className="form-group mobile-center">
                    <button
                      disabled={!isChecked}
                      type="submit"
                      className="default-btn btn-contact-form"
                    >
                      Submit <span></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="decorate-overlay1"></div>
          <div className="decorate-overlay2"></div>
          <div className="decorate-overlay3"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
