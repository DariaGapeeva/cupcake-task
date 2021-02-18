import React, { useEffect } from "react";
import Table from "./Table";
import { api } from "./../../API/api";
import { connect } from "react-redux";

const TableContainer = (props) => {
  useEffect(() => {
    api.setRates("first").then((response) => console.log(response));
  }, []);

  return (
    <Table
    // users={this.props.users}
    // deleteUser={this.props.deleteUser}
    // buttonSaveDisabled={this.props.buttonSaveDisabled}
    // buttonDeleteDisabled={this.props.buttonDeleteDisabled}
    // inputDisabled={this.props.inputDisabled}
    // updateUserData={this.props.updateUserData}
    // updateButton={this.props.updateButton}
    // buttonUpdateDisabled={this.props.buttonUpdateDisabled}
    // deleteUserThunk={this.props.deleteUserThunk}
    // name={this.props.name}
    // saveNameThunk={this.props.saveNameThunk}
    // inputFillAddLine={this.props.inputFillAddLine}
    // buttonSaveAddLine={this.props.buttonSaveAddLine}
    // buttonFillAddLine={this.props.buttonFillAddLine}
    // onClickButtonFillAddLine={this.props.onClickButtonFillAddLine}
    // addNewUser={this.props.addNewUser}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    // users: state.table.users,
    // buttonSaveDisabled: state.table.buttonSaveDisabled,
    // inputDisabled: state.table.inputDisabled,
    // buttonDeleteDisabled: state.table.buttonDeleteDisabled,
    // buttonUpdateDisabled: state.table.buttonUpdateDisabled,
    // buttonFillAddLine: state.table.buttonFillAddLine,
    // inputFillAddLine: state.table.inputFillAddLine,
    // buttonSaveAddLine: state.table.buttonSaveAddLine
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    // setUsers: (users) => (dispatch(setUsersAC(users))),
    // updateUserData: (userId, index, name, username, phone, website) => (dispatch(updateUserDataAC(userId, index, name, username, phone, website))),
    // updateButton: (index) => (dispatch(updateButtonAC(index))),
    // deleteUserThunk: (userId, index) => (dispatch(deleteUserThunkAC(userId, index))),
    // getUsersData: () => (dispatch(getUsersDataThunkAC())),
    // onClickButtonFillAddLine: () => (dispatch(onClickButtonFillAddLineAC())),
    // addNewUser: (name, username, phone, address, website) => (dispatch(addNewUserAC(name, username, phone, address, website)))
  };
};

export default TableContainer;
