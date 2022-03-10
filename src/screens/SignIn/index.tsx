import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Alert,
  Image, 
  Keyboard, 
  KeyboardAvoidingView,
  Platform, 
  Text,
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { ButtonSign } from '../../components/ButtonSign';
import { Input } from '../../components/Input';
import { useAuth } from '../../hook/auth';

import { styles } from './styles';
import { theme } from '../../global/theme';
import GoogleIcon from '../../../assets/images/GoogleIcon.png'
import FaceIcon from '../../../assets/images/FaceIcon.png'


export function SignIn() {
  const navigation = useNavigation()  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleGoBack() {
    navigation.goBack();
  }

  function handleRegister() {
    navigation.navigate('SignUp');
  }

  async function handleSignIn() {
    try {
      const Schema = yup.object().shape({
        password: yup.string().required("Senha obrigatória!"),
        email: yup.string().required("E-mail obrigatório!").email("Esse e-mail é inválido!")
      });

      await Schema.validate({ email, password });
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        return Alert.alert(error.message);
      } else {
        return Alert.alert(
          "Erro na autenticação",
          "Verifique suas credenciais."
        );
      }
    }
  }

  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar com a conta Google');
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>    
      <KeyboardAvoidingView
        behavior='position' enabled
        style={{ flex: 1 }}
      >        
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View 
              style={styles.pagination}
            >
              <BorderlessButton onPress={handleGoBack}>
                <Feather
                  name='chevron-left'
                  size={30}
                  color={theme.color.highligh}
                />
              </BorderlessButton>

              <Text style={styles.titlePagination}>Login</Text>
            </View>
            <View style={styles.content}>
              <Image source={require('../../../assets/icon.png')} style={styles.logo} />

              <Text style={styles.title}>
                Vamos lá.
              </Text>

              <Text style={styles.subtitle}>
                Escolha qual conta {`\n`}você quer entrar
              </Text>

              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <ButtonSign 
                  source={GoogleIcon} 
                  title='Google'
                  onPress={handleSignInWithGoogle}
                />
                <ButtonSign 
                  source={FaceIcon} 
                  title='Facebook' 
                />
              </View>
              
              <Text style={styles.register}>ou</Text>

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
                  onPress={handleSignIn}
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
                <TouchableOpacity 
                  activeOpacity={0.7}
                  onPress={handleRegister}
                >
                  <Text style={styles.createAccount}>Criar conta</Text>
                </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}