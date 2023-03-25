import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCounterByValue } from "../slices/counterSlice";
import { changeDesignation } from "../slices/userSlice";

function Test2() {
  const data = useSelector((state) => state.counter);
  const data2 = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const changeCounterValue = () => {
    // creating action obj by passing payload = 5 to reducer
    const actionObj = incrementCounterByValue(5);

    // dispatching action obj to store's reducer
    dispatch(actionObj);
  };

  const changeDesignationHere = () => {
    const actionObj = changeDesignation("SDE");
    dispatch(actionObj);
  };

  return (
    <div>
      <div className="container bg-danger rounded text-white">
        <h2>Test2</h2>
        <h2>{data.value}</h2>
        <button onClick={changeCounterValue} className="btn btn-warning mb-2">
          Increment by 5
        </button>
      </div>

      <div className="container bg-success rounded text-white mt-4">
        <h2>User details</h2>
        <h3>{data2.name}</h3>
        <h3>{data2.designation}</h3>
        <h3>{data2.city}</h3>
        <button onClick={changeDesignationHere} className="btn btn-danger mb-2">
          Change Designation
        </button>
      </div>
    </div>
  );
}

export default Test2;
