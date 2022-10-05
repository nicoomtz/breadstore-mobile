import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import ShopNavigator from "./shop";
import TabsNavigator from "./tabs";

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
