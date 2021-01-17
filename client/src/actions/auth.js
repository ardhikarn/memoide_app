import { AUTH } from "../constans/actionTypes";
import * as api from "../api/index.js";

// action creators
export const signin = (formData, history) => async (dispatch) => {
  try {
    // Login user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // signup user

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
