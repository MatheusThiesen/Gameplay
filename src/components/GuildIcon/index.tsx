import React from "react";
import { Image } from "react-native";

import { styles } from "./styles";

interface HeaderProps {}

export const GuildIcon: React.FC<HeaderProps> = () => {
  const uri = "https://github.com/matheusthiesen.png";
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />;
};
