import { ToastAndroid, Platform, AlertIOS } from "react-native";
import Toast from "react-native-toast-message";

export default function useRTKQuery(
  api,
  onSuccess = () => {},
  onFail = () => {}
) {
  const [post, { isLoading, isSuccess, isError, data, ...rest }] = api();

  async function request(body) {
    let resp = null;
    try {
      resp = await post(body);
      if (resp.error) {
        handleError(resp.error.data.message || "Failed msg");
        onFail(resp?.error?.data);
      } else {
        onSuccess(resp.data);
      }
    } catch (error) {
      resp = error;
      console.warn(error, "errrr");
    }
    return resp;
  }

  return { request, isLoading, isSuccess, isError, data };
}

function handleError(msg) {
  Toast.show({ type: "error", text2: msg });
}
