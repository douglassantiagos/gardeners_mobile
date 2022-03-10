import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ReactNode } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../global/theme";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  const { orange, orangeDark } = theme.color;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <LinearGradient
        style={styles.container}
        colors={[orange, orangeDark]}
      >
        <Text style={styles.title}>
          {title}
        </Text>      
      </LinearGradient>     
    </TouchableOpacity>
  )
}