import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import { incrementCounterByOne } from "./slices/counterSlice";

function App() {
  // use selector hook to get data from store
  const data = useSelector((state) => {
    // console.log("state ",state);

    // returning only the required slice from the state i.e. counter slice
    return state.counter;
  });

  const data2 = useSelector((state) => state.user);

  // dispatch m
  let dispatch = useDispatch();

  // function to modify count
  const modifyCounter = () => {
    // create action obj

    let actionObj = incrementCounterByOne();
    console.log("action obj", actionObj);

    // dispatch action obj to store
    dispatch(actionObj);
  };

  return (
    <div className="App">
      <div>
        <h1>Hello App!</h1>
        <h1>{data.value}</h1>
        <button onClick={modifyCounter} className="btn btn-dark mb-3">
          Increment
        </button>

        <div className="row">
          <div className="col container text-white bg-dark ms-3 me-3 mb-3  rounded">
            <h4>{data2.name}</h4>
            <h4>{data2.designation}</h4>
            <h4>{data2.city}</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col col-sm-4 col-md-6 col-lg-4">
          <Test1 />
        </div>
        <div className="col col-sm-4 col-md-6 col-lg-4">
          <Test2 />
        </div>
        <div className=" col col-sm-4 col-md-6 col-lg-4">
          <Test3 />
        </div>
      </div>
    </div>
  );
}

export default App;
