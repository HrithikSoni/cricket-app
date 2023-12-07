import React, { useState } from "react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import useAuth from "./useAuth";
import api from "../services/store/api";
import UTILS from "../utils";

const getHeader = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };
};

export default useApi = (hookConfig = {}) => {
  const {
    showLoader = true,
    showMessage = true,
    successMessage = "Successful",
    failMessage = "Failed",
    onSuccess = () => {},
    onFail = () => {},
  } = hookConfig;

  const { token, auth, role } = useAuth();

  const request = async (requestConfig) => {
    const {
      endpoint,
      body = {},
      method = UTILS.HTTPS_METHODS.POST,
      params = {},
    } = requestConfig;
    try {
      if (showLoader) {
        Toast.show(UTILS.TOAST_TYPE.LOADING);
      }

      const { headers } = getHeader(token);
      const data = await api.any({
        url: endpoint,
        params,
        headers,
        method,
        data: body,
      });

      Toast.hide();
      if (data.ok) {
        if (showMessage) {
          Toast.show({
            ...UTILS.TOAST_TYPE.SUCCESS,
            text2: data.data.message || successMessage,
          });
        }
        onSuccess(data.data);
      } else {
        if (showMessage) {
          Toast.show({
            ...UTILS.TOAST_TYPE.ERROR,
            text2:
              typeof data.data.message == "string"
                ? data.data.message
                : data.data.message[0] || failMessage,
          });
        }
        onFail(data.data.message);
      }

      return data;
    } catch (error) {
      Toast.show({ ...UTILS.TOAST_TYPE.ERROR, text2: failMessage });
      onFail(error);
      return error;
    }
  };

  return { request };
};
