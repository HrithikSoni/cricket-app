import * as React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";
import {
  NavigationHelpersContext,
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from "@react-navigation/native";
import UTILS from "../utils";
import AppText from "../components/text/AppText";

const colors = UTILS.COLORS;

function CustomNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
  labelStyle,
}) {
  const { state, navigation, descriptors, NavigationContent } =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <View style={[{ flexDirection: "row" }]}>
        {state.routes.map((route, index) => (
          <Pressable
            key={route.key}
            onPress={() => {
              const isFocused = state.index === index;
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.dispatch({
                  ...TabActions.jumpTo(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            style={[
              {
                backgroundColor:
                  state.index === index ? colors.themeColor : "transparent",
                alignItems: "center",
                justifyContent: "center",
              },
              tabBarStyle,
            ]}
          >
            <AppText
              style={[
                {
                  color:
                    state.index === index ? colors.textColor : colors.black,
                },
                labelStyle,
              ]}
            >
              {descriptors[route.key].options.title ?? route.name}
            </AppText>
          </Pressable>
        ))}
      </View>
      <View style={[{ flex: 1 }, contentStyle]}>
        {state.routes.map((route, i) => {
          return (
            <View
              key={route.key}
              style={[
                StyleSheet.absoluteFill,
                { display: i === state.index ? "flex" : "none" },
              ]}
            >
              {descriptors[route.key].render()}
            </View>
          );
        })}
      </View>
    </NavigationContent>
  );
}

export const createMyNavigator = createNavigatorFactory(CustomNavigator);
