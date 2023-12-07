import { useEffect } from "react";

export default function useRTKQuery(
  api,
  onSuccess = () => {},
  onFail = () => {}
) {
  const [request, { isLoading, isSuccess, isError, data, ...rest }] = api();
  // console.log(rest, "rest");

  // useEffect(() => {
  //   if (isSuccess) {
  //     onSuccess(data);
  //   }

  //   if (isError) {
  //     console.log(data, "fail");
  //     onFail();
  //   }
  // }, [isSuccess, isError]);

  async function post(body) {
    try {
      const resp = await request(body);
      if (resp.error) {
        onFail(resp?.error?.data);
      } else {
        onSuccess(resp.data);
      }
    } catch (error) {
      console.warn(error, "errrr");
    }
  }

  return { post, isLoading, isSuccess, isError, data };
}
