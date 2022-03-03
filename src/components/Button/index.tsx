import React from "react";
import { ReactNode } from "react";
import { Image, ImageProps, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { theme } from "../../global/theme";

import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity {...rest} style={styles.container} activeOpacity={0.7}>     
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}