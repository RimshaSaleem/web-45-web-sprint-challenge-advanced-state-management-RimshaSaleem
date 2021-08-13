import axios from "axios";
export const ACTION_FETCH = 'ACTION_FETCH';
export const ACTION_SUCCESS = 'ACTION_SUCCESS';
export const ACTION_FAILED = 'ACTION_FAILED';
export const ACTION_ADD = 'ACTION_ADD';
export const SET_ACTION_ERROR = 'SET_ACTION_ERROR'

export const actionFetch = () => {
  return {
    type: ACTION_FETCH,
  };
};

export const actionFailed = () => {
  return {
    type: ACTION_FAILED,
  };
};
export const actionSuccess = (smurfs) => {
    return {
      type: ACTION_SUCCESS,
      payload: smurfs,
    };
  };

export const addAction = (newSmurf) => {
  return {
    type: ACTION_ADD,
    payload: newSmurf,
  };
};

export const set_action_Error = () => {
    return {
        type: SET_ACTION_ERROR
    }
}
export const fetchSmurfs = () => {
    console.log("test this");
    return (dispatch) => {
      dispatch(actionFetch());
      axios
        .get("http://localhost:3333/smurfs")
        .then((res) => dispatch(actionSuccess(res.data)))
        .catch((error) => console.log("Error occur in axios", error));
    };
  };


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.