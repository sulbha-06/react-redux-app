import React from "react";
import { buyCake } from "../redux";
import {useSelector , useDispatch} from 'react-redux';
function HooksCakeContainer() {
    const  numberOfCakes = useSelector(state=>state.numberOfCake);
    const dispatch = useDispatch()
  return (
    <>
      <div>Number of cakes {numberOfCakes}</div>
      <button onClick={()=>{dispatch(buyCake())}}>Buy Cake</button>
    </>
  );
}

export default HooksCakeContainer;
