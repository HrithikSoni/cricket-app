const ToastType = {
  LOADING: { type: "loading", topOffset: 0 },
  ALERT: { type: "alert", visibilityTime: 20000 },
  BACK_ALERT: { type: "backAlert", visibilityTime: 20000 },
  SUCCESS: {
    type: "success",
    text1: "Successful",
    text2: "Data uploaded successfully",
    visibilityTime: 1000,
  },
  ERROR: { type: "error", text1: "Failed", text2: "Failed to upload data" },
};
export default ToastType;
