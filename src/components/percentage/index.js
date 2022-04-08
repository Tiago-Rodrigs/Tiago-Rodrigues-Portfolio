import React from "react";
import "./style.css";

export default function Percentage(props) {
    let {technology, percentage } = props;
  return (
    <div className="percentage-container">
      <div className="percentage" style={{width: percentage}}>
        <p>{technology}</p>
        <p>{percentage}</p>
      </div>
    </div>
  );
}
