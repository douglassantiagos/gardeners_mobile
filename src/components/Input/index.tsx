import React, { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles";
import { theme } from "../../global/theme";

interface InputProps extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>["name"];
  value?: string
}

export function Input({ iconName, value, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!value)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  return(
    <View 
      style={styles.form} 
    > 
      <Feather 
        name={iconName}
        style={[
          styles.icon,
          ( isFocused || isFilled ) ?
          { color: theme.color.primary} :
          { color: theme.color.placeholder }
        ]}
      />                   
      <TextInput
        style={[styles.input,
          ( isFocused || isFilled ) ?
          { borderBottomColor : theme.color.primary } :
          { borderBottomColor : theme.color.heading }
        ]}
        {...rest}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}                
      />
    </View>
  )

}