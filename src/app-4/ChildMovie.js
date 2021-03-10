import PropTypes from "prop-types";

function ChildMovie(props) {
  console.log(props);
  return (
    <div>
      {" "}
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
      })}
    </div>
  );
}

ChildMovie.propTypes = {
  movieListArray: PropTypes.array,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
};

export default ChildMovie;
