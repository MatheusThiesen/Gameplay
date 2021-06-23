import React from "react";

import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  rectButtonProps: RectButtonProps;
}

export const ButtonIcon: React.FC<HeaderProps> = ({
  title,
  rectButtonProps,
}) => {
  return (
    <RectButton style={styles.container} {...rectButtonProps}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
    </RectButton>
  );
};
