import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Image, 
  Keyboard, 
  KeyboardAvoidingView, 
  Modal, 
  Platform, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/theme';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignInAnotherEmail() {
  const { primary, highligh } = theme.color;

  const navigation = useNavigation()  

  const handleGoBack = () => {
    navigation.goBack();
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>    
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <LinearGradient 
              style={styles.pagination}
              colors={[primary, highligh]}
            >
              <BorderlessButton onPress={handleGoBack}>
                <Feather
                  name='chevron-left'
                  size={30}
                  color={theme.color.background}
                />
              </BorderlessButton>

              <Text style={styles.titlePagination}>Login</Text>
            </LinearGradient>
            <View style={styles.content}>
              <Image source={require('../../../assets/icon.png')} style={styles.logo} />

              <Text style={styles.title}>
                Vamos começar?
              </Text>

              <Text style={styles.subtitle}>
                Digite seu email {`\n`}e senha para entrar
              </Text>

              <Input
                iconName='mail'
                value={email}
                placeholder='E-mail'
                onChangeText={setEmail}
                keyboardType='email-address'
              />
              <Input
                iconName='lock'
                value={password}
                placeholder='Senha'
                onChangeText={setPassword}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.footer}>              
              <View>
                <Button
                  title='Entrar'
                />
              </View>

              <View style={styles.contentFooter}>
                <Text style={styles.textQuestion}>
                    Esqueceu a senha?
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonLogin}>
                        Clique aqui
                    </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  )
}