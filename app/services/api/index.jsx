import { create } from "apisauce";
// npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

export const URL = "https://e232-103-15-252-208.ngrok-free.app";

const api = create({
  baseURL: `${URL}/`,
});

export default api;
