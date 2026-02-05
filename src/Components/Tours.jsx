import { useState } from "react";
import Tour from "./Tour";

function Tours({ removeTour, tours }) {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              name={tour.name}
              id={tour.id}
              price={tour.price}
              info={tour.info}
              image={tour.image}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
