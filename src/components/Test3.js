import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCounterByValue } from "../slices/counterSlice";
import { changeCity } from "../slices/userSlice";

function Test3() {
  // use selector to read data from store
  const data = useSelector((state) => state.counter);
  const data2 = useSelector((state) => state.user);

  // calling useDispatch method for using
  const dispatch = useDispatch();

  const changeCounterValue = () => {
    // creating action obj by passing payload = 3 to reducer
    const actionObj = incrementCounterByValue(3);

    // dispatching action obj to store's reducer
    dispatch(actionObj);
  };

  const changeCityHere = () => {
    const actionObj = changeCity("Delhi");
    dispatch(actionObj);
  };
  return (
    <div>
      <div className="container bg-primary rounded text-white">
        <h2>Test3</h2>
        <h2>{data.value}</h2>
        <button onClick={changeCounterValue} className="btn btn-success mb-2">
          Increment by 3
        </button>
      </div>
      <div className="container bg-primary rounded text-white mt-4">
        <h2>User Details</h2>
        <h4>{data2.name}</h4>
        <h4>{data2.designation}</h4>
        <h4>{data2.city}</h4>
        <button onClick={changeCityHere} className="btn btn-success mb-2">
          Change City
        </button>
      </div>
    </div>
  );
}

export default Test3;
