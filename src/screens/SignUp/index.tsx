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

import { styles } from './styles';
import { theme } from '../../global/theme';
import { Button } from '../../components/Button';
import { Background } from '../../components/Background';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from '../../components/Input';

export function SignUp() {
  const { primary, highligh } = theme.color;

  const navigation = useNavigation()  

  const handleGoBack = () => {
    navigation.goBack();
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>    
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        {/* <Modal
          transparent
          animationType='slide'
          statusBarTranslucent
        > */}        
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

                <Text style={styles.titlePagination}>Cadastro</Text>
              </LinearGradient>
              
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
                          Voltar
                      </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      {/* </Modal> */}
    </>
  )
}