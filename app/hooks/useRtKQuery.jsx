import { ToastAndroid, Platform, AlertIOS } from "react-native";
import Toast from "react-native-toast-message";

export default function useRTKQuery(
  api,
  onSuccess = () => {},
  onFail = () => {}
) {
  const [post, { isLoading, isSuccess, isError, data, ...rest }] = api();

  async function request(body) {
    try {
      const resp = await post(body);
      if (resp.error) {
        handleError(resp.error.data.message || "Failed msg");
        onFail(resp?.error?.data);
      } else {
        onSuccess(resp.data);
      }
    } catch (error) {
      console.warn(error, "errrr");
    }
  }

  return { request, isLoading, isSuccess, isError, data };
}

function handleError(msg) {
  Toast.show({ type: "error", text2: msg });
}
