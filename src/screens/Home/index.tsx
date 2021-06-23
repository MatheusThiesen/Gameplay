import React from "react";
import { View, Text, Image } from "react-native";

import { Profile } from "../../components/Profile";
import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";

import { styles } from "./styles";

export const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect categorySelected="" />
      </View>
    </View>
  );
};
