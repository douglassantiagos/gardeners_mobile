import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import IllustrationImg from '../../../assets/images/IllustrationImg.png'
import Logo  from '../../../assets/icon.png'
import GoogleIcon from '../../../assets/images/GoogleIcon.png'
import FaceIcon from '../../../assets/images/FaceIcon.png'
import { ButtonSign } from '../../components/ButtonSign'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { Button } from '../../components/Button'
import { theme } from '../../global/theme'

export function SignIn() {
  const navigation = useNavigation()

  const handleRegister = () => {
    navigation.navigate('SignUp');
  }

  const handleSignInAnotherEmail = () => {
    navigation.navigate('SignInAnotherEmail');
  }

  const handleHome = () => {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}> 
        <Text style={styles.title}>
          Deixe o mundo{`\n`}
          mais verde{`\n`}
        </Text>
           
        <Image 
          style={styles.image}
          source={IllustrationImg}
          resizeMode='stretch'
        />

        <View style={styles.content}>
          

          <Text style={styles.subtitle}>
            Compre, venda ou troque plantas {`\n`}
            e monte o seu jardim {`\n`}          
          </Text>

          <ButtonSign 
            source={GoogleIcon} 
            title='Entrar com Google'
            onPress={handleHome}
          />
          <ButtonSign 
            source={FaceIcon} 
            title='Entrar com Facebook' 
          />
          <Button 
            title="Entrar com outro Email" 
            style={{backgroundColor: theme.color.line}} 
            onPress={handleSignInAnotherEmail}
          />

          <Text style={styles.register}>ou</Text>

          <TouchableOpacity 
            activeOpacity={0.7}
            onPress={handleRegister}
          >
            <Text style={styles.register}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}