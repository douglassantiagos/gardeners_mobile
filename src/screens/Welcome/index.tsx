import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import IllustrationImg from '../../../assets/images/IllustrationImg.png'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/theme'
import { SafeAreaView } from 'react-native-safe-area-context'

export function Welcome() {
  const navigation = useNavigation();  

  const handleSignIn = () => {
    navigation.navigate('SignIn');
  }  

  const { orange, orangeDark } = theme.color;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background>
        <View style={styles.container}>            
          <Image 
            style={styles.image}
            source={IllustrationImg}
            resizeMode='stretch'
          />

          <Text style={styles.title}>
            Deixe o mundo{`\n`}
            mais verde{`\n`}
          </Text>

          <View style={styles.content}>         
            <Text style={styles.subtitle}>
              Compre, venda ou troque plantas {`\n`}
              e monte o seu jardim {`\n`}          
            </Text>
            
            <TouchableOpacity 
              activeOpacity={0.7}
              onPress={handleSignIn}
            >
              <LinearGradient
                style={styles.button}
                colors={[orange, orangeDark]}
              >
                <Text style={styles.buttonTitle}>
                  Começar
                </Text>      
              </LinearGradient>     
            </TouchableOpacity>
          </View>
        </View>
      </Background>
    </SafeAreaView>
  )
}