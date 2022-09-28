import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Products = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
      <Button
        title="Go to Product"
        onPress={() => navigation.navigate("Product")}
      />
    </View>
  );
};

export default Products;
