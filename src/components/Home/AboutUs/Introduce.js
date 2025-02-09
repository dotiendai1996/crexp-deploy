import React from "react"
import ReactWOW from "react-wow"
import { Link } from "gatsby"

const Introduce = () => {
  return (
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single-introduce-box">
          <div className="number number-one">
            <span>01</span>
          </div>
          <h3>Vision</h3>
          <p>
            Ensure seamless deliverables at highest level of customer
            satisfaction while creating the most innovative tech solutions for
            the clients.
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <div className="single-introduce-box">
          <div className="number number-two">
            <span>02</span>
          </div>
          <h3>Mision</h3>
          <p>
            Acelerate technology and empower businesses by innovative solutions
          </p>
        </div>
      </div>

      <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
        <div className="single-introduce-box">
          <div className="number number-three">
            <span>03</span>
          </div>
          <h3>Team info</h3>
          <p>
            Our technology specialists are highly skilled technical leaders,
            developers, designers, business analysts that beyond full-stack and
            work with dedicated adtitude, try to add value to customer business
            by consultation approaches.
          </p>
          <ReactWOW delay=".1s" animation="fadeInRight">
            <div className="btn-box">
              <Link to="/#contact" className="default-btn">
                {/* <i className="flaticon-right"></i>  */}
                GET CREDENTIALS <span></span>
              </Link>
            </div>
          </ReactWOW>
        </div>
      </div>
    </div>
  )
}

export default Introduce
