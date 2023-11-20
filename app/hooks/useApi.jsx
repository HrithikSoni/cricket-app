import React, { useState, useEffect, useContext } from "react";

import instance from "../services/axiosConfig";
import HTTP_METHODS from "../services/methods";
import { AuthContext } from "../context/AuthContext";

export default function useAPI({ onSuccess = () => {}, onFail = () => {} }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);

  async function request({ method = HTTP_METHODS.GET, endpoint, body = {} }) {
    setIsLoading(true);
    instance.defaults.headers.common["Authorization"] = `Bearer ${user?.token}`;
    // console.log(user?.token);
    try {
      const response = await instance[method](endpoint, body);
      setData(response?.data);
      onSuccess(response);
      return response;
    } catch (error) {
      onFail(error);
      console.warn(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, isLoading, request };
}
