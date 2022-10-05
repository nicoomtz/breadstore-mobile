import { Button, FlatList, Text, View } from "react-native";

import { ProductItem } from "../../components";
import React from "react";
import { products } from "../../constants/data";
import { styles } from "./styles";

const Products = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const productsFiltered = products.filter(
    (product) => product.categoryId === categoryId
  );

  const onSelected = (item) => {
    navigation.navigate("Product", { name: item.title, productId: item.id });
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onSelected={onSelected} />
  );

  return (
    <FlatList
      data={productsFiltered}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default Products;
