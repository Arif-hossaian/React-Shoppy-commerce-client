import axios from "axios";
import { baseURL } from "../baseURL";


export const authenticateLogin = async (user) => {
  try {
    return await axios.post(`${baseURL}/login`, user);
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${baseURL}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${baseURL}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};

export const payUsingSslCommerz = async (data) => {
  try {
    console.log("payment api");
    let response = await axios.post(`${baseURL}/ssl-request`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
