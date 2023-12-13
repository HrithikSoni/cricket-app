import { useNavigation } from "@react-navigation/native";
import authApi from "../services/store/api/authApi";

export default function useAuthentication() {
  const navigation = useNavigation();

  const [registerUser, rest] = authApi.useLoginMutation();
  async function login(body) {
    const resp = await registerUser(body);
  }

  return { login };
}
