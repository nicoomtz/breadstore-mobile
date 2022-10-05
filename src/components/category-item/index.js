import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CategoryItem = ({ item, onSelected }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ ...styles.contentContainer, backgroundColor: item.color }}
        onPress={() => onSelected(item)}
      >
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default CategoryItem;
