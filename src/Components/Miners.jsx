import React from "react";
import "../styles/Miners.css";
import { Link } from "react-router-dom";
const Miners = () => {
  return (
    <>
    <section id="miners">
      <div className="rowone mt-5">
      <div className="section-title">
          <h2>Miners</h2>
          <p>Check our Miners</p>
        </div>
        <div className="d-flex justify-content-evenly mb-4">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/2248589/pexels-photo-2248589.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/321464/pexels-photo-321464.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/266430/pexels-photo-266430.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="rowtwo">
        <div className="d-flex justify-content-evenly mt-2">
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/342945/pexels-photo-342945.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
               <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/318820/pexels-photo-318820.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
               <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/321464/pexels-photo-321464.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
               <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
          <div className="card text-center" style={{ width: "18rem" }}>
            <img
              src="https://images.pexels.com/photos/366551/pexels-photo-366551.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
               <Link to="/minersform">
                {" "}
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Miners;
