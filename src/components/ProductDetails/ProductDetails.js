import React from "react";
import ViewProductDetails from "./ViewProductDetails";
import EditProductDetails from "./EditProductDetails";
import { connect } from "react-redux";
import { changeUserAction } from "./AdminActions";
const mapStateToProps = (state) => ({
  accessLevel: state.user.accessLevel,
  userAction: state.user.user.action,
});

const mapDispatchToProps = (dispatch) => ({
  changeUserAction: (action) => dispatch(changeUserAction(action)),
});
const ProductDetails = ({ userAction, accessLevel, changeUserAction }) => {
  if (userAction === "view") {
    return (
      <ViewProductDetails
        accessLevel={accessLevel}
        changeUserAction={changeUserAction}
      />
    );
  } else if (userAction === "edit") {
    return <EditProductDetails changeUserAction={changeUserAction} />;
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
