import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Alert,
  Keyboard, 
  KeyboardAvoidingView, 
  Modal, 
  Platform, 
  Text, 
  TouchableOpacity, 
  TouchableWithoutFeedback, 
  View 
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import * as yup from 'yup'

import { styles } from './styles';
import { theme } from '../../global/theme';
import { Button } from '../../components/Button';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Input } from '../../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SignUp() {
  const navigation = useNavigation()  

  const handleGoBack = () => {
    navigation.goBack();
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp() {
    try {
      const Schema = yup.object().shape({
        password: yup.string().required("Senha obrigatória!"),
        phone: yup.number().required(`Telefone obrigatório! ${'\n'} Ex: DDD + número`),
        email: yup.string().required("E-mail obrigatório!").email("Esse e-mail é inválido!"),
        name: yup.string().required('Nome obrigatório')
      });

      await Schema.validate({ name, email, phone, password });
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

  return (
    <SafeAreaView style={{ flex: 1 }}>    
      <KeyboardAvoidingView
        behavior='position' enabled
        style={{ flex: 1 }}
      >
        {/* <Modal
          transparent
          animationType='slide'
          statusBarTranslucent
        > */}        
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

                <Text style={styles.titlePagination}>Cadastro</Text>
              </View>
              
              <View style={styles.ContentTitle}>
                {/* <Image source={require('../../../assets/icon.png')} style={styles.logo} /> */}
                <Text style={styles.title}>Crie sua {`\n`}conta</Text>

                <Text style={styles.subtitle}>Preencha os campos abaixo {`\n`}para efetuar o cadastro</Text>
              </View>                
              
              <View style={styles.form}>                
                <Input
                  iconName='user'
                  value={name}
                  placeholder='Nome Completo'
                  onChangeText={setName}
                />
                <Input
                  iconName='mail'
                  value={email}
                  placeholder='E-mail'
                  onChangeText={setEmail}
                  keyboardType='email-address'
                />
                <Input
                  iconName='phone'
                  value={phone}
                  placeholder='Telefone'
                  onChangeText={setPhone}
                  keyboardType='numeric'
                />
                <Input
                  iconName='lock'
                  value={password}
                  placeholder='Senha'
                  onChangeText={setPassword}
                  secureTextEntry  
                />
              </View>
              
              <View style={styles.ContainerFooter}>
                <View>
                  <Button
                    title='Cadastrar'
                    onPress={handleSignUp}                    
                  />
                </View>              

                <View style={styles.contentQuestion}>
                  <Text style={styles.textQuestion}>
                      Você já possui uma conta?
                  </Text>
                  <TouchableOpacity
                      activeOpacity={0.7}
                      onPress={handleGoBack}
                  >
                      <Text style={styles.buttonLogin}>
                          Login
                      </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      {/* </Modal> */}
    </SafeAreaView>
  )
}