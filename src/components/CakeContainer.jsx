import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <>
      <div>Number of cakes {props.numberOfCake}</div>
      <div>
        <button onClick={props.buyCake}>Buy Cakes</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
