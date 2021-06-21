import React from "react";

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

interface HeaderProps {
  title: string;
  touchableOpacity: TouchableOpacityProps;
}

export const ButtonIcon: React.FC<HeaderProps> = ({
  title,
  touchableOpacity,
}) => {
  return (
    <TouchableOpacity style={styles.container} {...touchableOpacity}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}></Image>
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
