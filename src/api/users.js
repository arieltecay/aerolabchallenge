import axios from "axios";
import { apiUrl } from "./api";
import { FETCH_ALL } from "../constants/actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiUrl}/user/me`);
    dispatch({ type: FETCH_ALL, payload: result });
    //console.log("Usuarios:", result.data);
  } catch (error) {
    console.log(error.message);
  }
};
