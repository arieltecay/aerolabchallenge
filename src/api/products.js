import axios from 'axios'
import { apiUrl } from "./api";
import { FETCH_ALL } from "../constants/actionTypes";

export const getProducts = () => async (dispatch) => {
    try {
      const result = await axios.get(`${apiUrl}/products`);
      dispatch({ type: FETCH_ALL, payload: result });
      console.log('Productos',result.data);
    } catch (error) {
      console.log(error.message);
    }
  };