import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export const ListHeader: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
