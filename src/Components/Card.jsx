import React from "react";
import "../Components/Card.css";

const Card = ({ element }) => {
  return (
    <div>
     <div className="parent">
      <div key={element.id}>
        <div className="card ">
          <div className="card_img">
            <img src={element.image} />
          </div>
          <div className="card_details">
            <p className="card_content">{element.content}</p>

            <p className="card_author"> {element.author}</p>

            <p className="card_date " >{element.date}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Card;
