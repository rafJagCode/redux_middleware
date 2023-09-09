import React from "react";
import { connect } from "react-redux";
import updateTime from "../duck/actions";

const TimeDisplayer = (props) => (
  <div className="timeDisplayer">
    <p>{props.time}</p>
    <button onClick={props.updateTime}>Update Time</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    time: state.time.currentTime,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateTime: () => dispatch(updateTime()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeDisplayer);
