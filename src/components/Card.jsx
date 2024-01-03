import React from "react";

const Card = (props) => {
  return (
    <>
    {props.data?
    <div className={`card block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-yellow-600 ${props.width} ${props.height}`}>
    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h3>
      <p className="font-normal">{props.data}</p>
      <img src={props.url} className={props.url?`block`:'none'}/>
    </div>:<button type="button" class="bg-indigo-500 ..." disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  Processing...
</button>
    }
    </>
  );
};

export default Card;
