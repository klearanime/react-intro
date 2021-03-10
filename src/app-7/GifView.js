import React from "react";

function GifView(props) {
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

export default GifView;

/*



    */
