import { useState } from "react";

function Tour(props) {
  // destructure the props
  const { id, image, name, info, price, removeTour } = props;

  // Toggle Functionality for the read More button
  //1. Start with a boolean state value
  const [readMore, setReadMore] = useState(false);

  // Functionality
  /*
    - Use substring to display some of the text.
    - If read more is true, then display all the text
  */

  // Toggle Function
  function handleClick() {
    if (readMore) {
      setReadMore(false);
    } else {
      setReadMore(true);
    }
  }

  if (readMore) {
    return (
      <article className="single-tour">
        <img src={image} alt="" className="img" />
        <span className="tour-price">${price}</span>
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {info}
            <button className="info-btn" onClick={handleClick}>
              {" "}
              Show Less
            </button>
          </p>
          <button
            type="button"
            className="delete-btn btn-block btn"
            onClick={() => removeTour(id)}
          >
            Not Interested
          </button>
        </div>
      </article>
    );
  }

  return (
    <article className="single-tour">
      <img src={image} alt="" className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {info.substring(0, 200)}...
          <button className="info-btn" onClick={handleClick}>
            {" "}
            read more
          </button>
        </p>
        <button
          type="button"
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
