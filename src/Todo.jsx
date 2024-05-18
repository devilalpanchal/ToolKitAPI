import React, { useEffect } from "react";
import { getSingleProduct, getTodo } from "./redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./App.css";
const Todo = () => {
  const navigate = useNavigate();
  const { loading, todoData, error, name, isLoggedin } = useSelector(
    (state) => state.auth
  );
    console.log(loading);
  console.log(todoData);
  const dispatch = useDispatch();   
  const handlePage = (id) => {
    dispatch(getSingleProduct(id));
    navigate(`/${id}`);
  };

  useEffect(() => {
    dispatch(getTodo());
  }, []);

  return (
    <div className="mainCard_Container">
      {todoData &&
        todoData.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handlePage(item.id)}
              className="card"
            >
              <img className="imagemain" src={item.images[0]} alt="" />
              <h5>Title : {item.title}</h5>
              <h5>Brand : {item.brand}</h5>
              <p>Category : {item.category}</p>
              <h5>Stock : {item.stock}</h5>
              <p>Description : {item.description}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Todo;
