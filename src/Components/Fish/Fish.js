import React from "react";
import "./Fish.css";

const Fish = (props) => {
  console.log(props.fish);
  const {
    strArea,
    strCategory,
    strInstructions,
    strMeal,
    strMealThumb,
    strYoutube,
  } = props.fish;
  return (
    <div className="col-lg-4 col-sm-12 p-2">
      <div>
        <div className="card p-2 shadow-lg">
          <div className="img-container">
            <img className="card-img-top img-fluid" src={strMealThumb} alt="" />
          </div>
          <div className="card-body">
            <h5 className="card-title">{strMeal}</h5>
            <p className="card-text">{strInstructions.slice(0, 200)}</p>

            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalLong"
              className="btn btn-danger px-4 fw-bold"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title bg-danger px-5 text-white rounded text-center mx-auto"
                  id="exampleModalLongTitle"
                >
                  {strMeal}
                </h5>
                <button
                  type="button"
                  className="close btn-secondary"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <img src={strMealThumb} className="img-fluid" alt="" />
                <h6>
                  Culture : {strArea} {" ; "}Catagry : {strCategory}
                </h6>
                <hr />
                <p>{strInstructions}</p>
                <p>
                  <small>
                    Feel Free To go to YOUTube{" "}
                    <h1>
                      <i class="fab fa-youtube-square text-danger rounded"></i>
                    </h1>
                  </small>
                </p>
                <a
                  href={strYoutube}
                  target="_blank"
                  rel="noreferrer"
                  className="card-text text-primary"
                >
                  {strYoutube}
                </a>
                <br />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fish;
