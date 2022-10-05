import { Orders } from "../screens";
import React from "react";
import { colors } from "../constants/themes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../utils";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Order"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontFamily: "Lato-Bold",
          textAlign: "center",
        },
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};
export default OrdersNavigator;
