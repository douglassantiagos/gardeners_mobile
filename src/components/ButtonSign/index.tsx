import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ReactNode } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../global/theme";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  source: ImageProps;
}

export function ButtonSign({ title, source, ...rest }: ButtonProps) {
  const { primary, highligh } = theme.color;

  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <LinearGradient
        style={styles.container}
        colors={[primary, highligh]}
      >
        <View style={styles.iconWrapper}>
          <Image style={styles.icon} source={source} />
        </View>

        <Text style={styles.title}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  )
}