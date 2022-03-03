import React from "react";
import { ReactNode } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  source: ImageProps;
}

export function ButtonSign({ title, source, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7}>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={source} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}