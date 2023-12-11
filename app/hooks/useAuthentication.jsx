import { useNavigation } from "@react-navigation/native";
import authApi from "../services/store/api/authApi";

export default function useAuthentication() {
  const navigation = useNavigation();

  const [registerUser, rest] = authApi.useLoginMutation();
  console.log(rest);
  async function login(body) {
    const resp = await registerUser(body);
    console.log(resp, "hitttttt");
  }

  return { login };
}
