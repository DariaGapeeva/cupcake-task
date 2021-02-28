import axios from "axios";
import { responseTransformer } from "../common/functions";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    accept: "application/json",
  },
});

export const api = {
  async setRates(address) {
    const response = await instance.get(`${address}`);
    response.data.rates = responseTransformer(response.data.rates);
    return response;
  },
};
