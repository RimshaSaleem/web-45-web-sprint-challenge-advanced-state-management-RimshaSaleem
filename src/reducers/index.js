import {
ACTION_FETCH,
 ACTION_SUCCESS,
 ACTION_FAILED, 
 ACTION_ADD, 
 SET_ACTION_ERROR, 
  } from "../actions";
  
  export const initialState = {
    smurfs: [],
    isLoading: false,
    error: "Must filled out these fields.Name, Position and Nickname fields are required.",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ACTION_FETCH:
    return {
    ...state,
    isLoading: true,
    };
    case ACTION_SUCCESS:
    return {
    ...state,
    smurfs: action.payload,
    isLoading: false,
    };
    case ACTION_FAILED:
    return {
    ...state,
    };
    case SET_ACTION_ERROR:
        return {
          ...state,
        };
    
    case ACTION_ADD:
    return {
    ...state,
    smurfs: [
    ...state.smurfs,
    {
    name: action.payload.name,
    nickname: action.payload.nickname,
    position: action.payload.position,
    description: action.payload.description,
    id: state.smurfs.length + 1,
            },
          ],
        };
        default:
            return state;
    }
  };
  

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.