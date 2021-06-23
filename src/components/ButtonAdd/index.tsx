import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

interface HeaderProps extends RectButtonProps {}

export const ButtonAdd: React.FC<HeaderProps> = ({ ...rest }) => {
  return (
    <RectButton {...rest} style={styles.container}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.heading}
        size={24}
      />
    </RectButton>
  );
};
