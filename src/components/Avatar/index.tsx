import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native';

import { styles } from './styles';
import { theme } from '../../global/theme';

type AvatarProps = {
  urlImage: string;
}

export function Avatar({ urlImage }: AvatarProps) {
  const {primary, highligh} = theme.color

  return (
    <LinearGradient 
      style={styles.container}
      colors={[primary, highligh]}
    >
      <Image
        source={{ uri: urlImage }}
        style={styles.avatar}
      />
    </LinearGradient>
  )
}