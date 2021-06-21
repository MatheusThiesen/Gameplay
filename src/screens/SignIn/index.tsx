import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon/index";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export const SignIn: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.image}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            {`Conecte-se\ne organize suas\njogatinas`}
          </Text>
          <Text style={styles.subtitle}>
            {`Crie grupos para jogar seus games \nfavoritos com seus amigos`}
          </Text>
          <ButtonIcon
            title="Entrar com Discord"
            touchableOpacity={{ activeOpacity: 0.6 }}
          />
        </View>
      </View>
    </>
  );
};
