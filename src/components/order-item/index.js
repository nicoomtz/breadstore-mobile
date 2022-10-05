import { Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { colors } from "../../constants/themes";
import { styles } from "./styles";

const formDate = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString();
};

const OrderItem = ({ item, onCancel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onCancel(item.id)}>
          <Ionicons name="close" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
