import React,{useState} from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

function NewCakeContainer(props) {
    const[number, setNumber]  = useState(1)
  return (
    <>
      <div>Number of cakes {props.numberOfCake}</div>
      <div>
        <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        <button onClick={()=>{props.buyCake(number)}}>Buy Cakes</button>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    numberOfCake: state.numberOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
