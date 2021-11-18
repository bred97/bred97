import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContexts';
import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './style';

import SignInput from '../../components/SignInput';

import api from '../../api';

import PagLogo from '../../assets/barber.svg';
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(nameField != '' && emailField != '' && passwordField != '') {
            let res = await api.signUp(nameField, emailField, passwordField);
            console.log("DEU CERTO")
            
            if(res.token) {
                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'SignIn'}]
                });
                console.log("Deu certo");

            } else {
                alert("Erro: "+res.error);
                console.log("Erro");
            }
        } else {
            alert("Preencha os campos");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });
    }

    const handleLogoutClick = async () => {
        await api.Logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        })
    }
/*<PagLogo width="100%" height="160" />*/
  return (
    <Container>
        

        <InputArea>
            <SignInput
                IconSvg={PersonIcon}
                placeholder="Digite seu nome"
                value={nameField}
                onChangeText={t=>setNameField(t)}
            />

            <SignInput
                IconSvg={EmailIcon}
                placeholder="Digite seu e-mail"
                value={emailField}
                onChangeText={t=>setEmailField(t)}
            />

            <SignInput
                IconSvg={LockIcon}
                placeholder="Digite sua senha"
                value={passwordField}
                onChangeText={t=>setPasswordField(t)}
                password={true}
            />

            <CustomButton onPress={handleSignClick}>
                <CustomButtonText>CADASTRAR</CustomButtonText>
            </CustomButton>
        </InputArea>

        <SignMessageButton onPress={handleMessageButtonClick}>
            <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
            <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
        </SignMessageButton>

    </Container>
  );
}