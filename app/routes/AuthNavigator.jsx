import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/AuthScreens/Login";
import Signup from "../screens/AuthScreens/Signup";
import Otp from "../screens/AuthScreens/Otp";
// import authBundle from "./screenBundle/AuthBundle";

const Stack = createStackNavigator();

function AuthNavigator() {

  return (
    <Stack.Navigator>
      {/* {authBundle.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.Component} />
      ))} */}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Otp" component={Otp} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
