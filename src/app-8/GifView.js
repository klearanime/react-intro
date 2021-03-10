import React from "react";
import PropTypes from "prop-types";

function GifView(props) {
  // function gifViewDeleteByID(itemID) {
  //   console.log("gifViewDeleteByID Line 5", itemID);
  //   props.handleDeleteByID(itemID);
  // }

  return (
    <div>
      {props.isLoading ? (
        <div>....Loading</div>
      ) : (
        <div className="container">
          <div className="row">
            {props.giphyArray.map((item) => {
              return (
                <div className="col-sm-4" key={item.id}>
                  <div className="card">
                    <div className="card-body">
                      <div>
                        <img src={item.images.fixed_width_still.url} />
                      </div>
                      <br />
                      <div>
                        <button
                          //onClick={() => gifViewDeleteByID(item.id)}
                          onClick={() => props.handleDeleteByID(item.id)}
                          //onClick={gifViewDeleteByID(item.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

GifView.propTypes = {
  isLoading: PropTypes.bool,
  handleDeleteByID: PropTypes.func,
};

export default GifView;

/*



    */
