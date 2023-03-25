import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

import { incrementCounterByValue } from "../slices/counterSlice";
import { changeName } from "../slices/userSlice";

function Test1() {
  // read data from store in react component
  const data = useSelector((state) => state.counter);
  const data2 = useSelector((state) => state.user);

  // initializtin dispatch to dispatch object to reducer
  const dispatch = useDispatch();

  const changeCounterByValue = () => {
    // creating action obj by giving payload 10
    let actionObj = incrementCounterByValue(10);

    // dispatching action obj
    dispatch(actionObj);
  };

  const changeNameHere = () => {
    // create action obj

    let actionObj = changeName("Ravi");

    // dispatching
    dispatch(actionObj);
  };
  return (
    <div>
      <div className="container bg-success rounded text-white">
        <h2>Test1</h2>
        <h2>{data.value}</h2>
        <button onClick={changeCounterByValue} className="btn btn-danger mb-2">
          Increment by 10
        </button>
      </div>

      <div className="container bg-success rounded text-white mt-4">
        <h2>User details</h2>
        <h4>{data2.name}</h4>
        <h4>{data2.city}</h4>
        <h4>{data2.designation}</h4> 
        <button onClick={changeNameHere} className="btn btn-danger mb-2">
          Change Name
        </button>
      </div>
    </div>
  );
}

export default Test1;
