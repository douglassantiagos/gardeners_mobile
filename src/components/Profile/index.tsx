import React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Avatar } from '../Avatar';
import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/douglassantiagos.png"  />

      <View style={styles.user}>
        <View>
          <Text style={styles.greeting}>
            Ola,
          </Text>          
          <Text style={styles.userName}>
            Douglas
          </Text>
        </View>
      </View>
    </View>
  )
}