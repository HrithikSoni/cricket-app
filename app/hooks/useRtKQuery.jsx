import { useEffect } from "react";

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
