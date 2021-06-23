import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { categories } from "../../utils/categories";

interface HeaderProps {
  rectButton?: RectButtonProps;

  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export const Category: React.FC<HeaderProps> = ({
  title,
  icon: Icon,
  checked = false,
  rectButton,
}) => {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <RectButton {...rectButton}>
      <LinearGradient
        colors={[secondary50, secondary70]}
        style={styles.container}
      >
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checkd : styles.check} />
          <Icon width={48} height={48} />
          <Text style={styles.title}> {title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};
