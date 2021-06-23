import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon/index";
import IllustrationImg from "../../assets/illustration.png";
import { styles } from "./styles";

export const SignIn: React.FC = () => {
  const navigation = useNavigation();
  function handleSignIn() {
    navigation.navigate("Home");
  }

  return (
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
          rectButtonProps={{ onPress: handleSignIn }}
        />
      </View>
    </View>
  );
};
