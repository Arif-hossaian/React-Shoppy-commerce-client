import axios from "axios";
import * as actionTypes from "../constants/productConstants";
import { baseURL } from './../../baseURL';


export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseURL}/products`);
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error,
    });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${baseURL}/product/${id}`);
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error,
    });
  }
};
