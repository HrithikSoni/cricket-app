import { create } from "apisauce";
// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

export const URL = "https://4d5d-103-15-252-0.ngrok-free.app";

const api = create({
  baseURL: `${URL}/`,
});

export default api;
