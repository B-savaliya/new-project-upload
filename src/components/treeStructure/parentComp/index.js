import React, { useContext, useEffect, useState } from "react";
import ChildrenComp from "./childrenComp";
import Children2Comp from "./children2Comp";
import Context from "../../../context";
import axios from "axios";
import { APIGET } from "../../../utils/api";
import { getQuotes } from "../../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useReducer } from "react";
import useStorage from "../../../hooks/useStorage";

function reducer(state, action) {
  // ...
  console.log("******reducer", state, action);
  switch (action.type) {
    case "string_change":
      return {
        ...state,
        testData: action.payload,
      };

    case "store_quotes":
      return {
        ...state,
        quotesData: action.payload,
      };

    default:
      break;
  }
}

const initialState = {
  testData: "init",
  quotesData: {},
};

export default function ParentComp() {
  const data = "chocolate";
  const dispatch = useDispatch();
  const { setProjectDetails } = useContext(Context);
  const { quotes, loading } = useSelector((state) => state.auth);
  const [state, localDispatch] = useReducer(reducer, initialState);
  const [setData, getData, clearData] = useStorage();

  console.log(
    "********dataaaaa",
    getData("testing"),
    setData("testing", 1000),
    clearData()
  );

  useEffect(() => {
    localDispatch({ type: "string_change", payload: "test" });
    dispatch(getQuotes())
      .then((res) => localDispatch({ type: "store_quotes", payload: res }))
      .catch();
  }, []);

  return (
    <div>
      parent
      {loading ? (
        <div class="loader"></div>
      ) : (
        quotes?.quotes?.map((item) => {
          return (
            <>
              <h4>{item.author}</h4>
              <p>{item.quote}</p>
            </>
          );
        })
      )}
      <button onClick={() => setProjectDetails(data)}>Click me</button>
      {/* <ChildrenComp data={data} /> */}
      {/* <Children2Comp data={data} /> */}
    </div>
  );
}
