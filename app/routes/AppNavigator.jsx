import { createStackNavigator } from "@react-navigation/stack";
import appBundle from './screenBundle/AppBundle'

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator>
      {appBundle.map((item, index) => (
        <Stack.Screen key={index} name={item.name} component={item.Component} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthNavigator;