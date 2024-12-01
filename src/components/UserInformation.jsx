import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/index";

function UserInformation({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);

  return userData.loading ? (
    <h2 style={{ textAlign: "center" }}>Loading.....</h2>
  ) : userData.error ? (
    <h2 style={{ textAlign: "center" }}>{userData.error}</h2>
  ) : (
    <div style={{ textAlign: "center" }}>
      <h2>User details</h2>
      <div>
        {userData.data.length &&
         <table style={{width:'100vw'}}>
            { userData.data.map(user=><tr><td style={{border:"black 2px dotted"}}>{user.name}</td></tr>)}
        </table>
        }
        
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserInformation);
