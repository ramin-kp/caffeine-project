import React from "react";

function InfoBox({ text, value, bgColor, icon }) {
  return (
    <div className={`${bgColor}`}>
      <span className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center">
        <svg className="w-6 h-6">
          <use href={`#${icon}`}></use>
        </svg>
      </span>
      <span>
        <p>{text}</p>
        <p>{value}</p>
      </span>
    </div>
  );
}

export default InfoBox;
