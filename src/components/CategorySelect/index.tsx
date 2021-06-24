import React from "react";
import { ScrollView } from "react-native";

import { styles } from "./styles";
import { categories } from "../../utils/categories";

import { Category } from "../Category";

interface HeaderProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
}

export const CategorySelect: React.FC<HeaderProps> = ({
  categorySelected,
  setCategory,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
      style={styles.container}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          rectButton={{ onPress: () => setCategory(category.id) }}
        />
      ))}
    </ScrollView>
  );
};
