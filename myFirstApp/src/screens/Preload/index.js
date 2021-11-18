import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './style';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from "../../contexts/UserContexts";
import api from '../../api';

import PagLogo from "../../assets/barber.svg";

export default () => {

  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(()=>{
    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            let res = await api.checkToken(token);
            if(res.token) {

                await AsyncStorage.setItem('token', res.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'Main'}]
                });

            } else {
                navigation.navigate('SignIn');
            }
        } else {
            navigation.navigate('SignIn');
        }
    }
    checkToken();
}, []);

/*<PagLogo width="100%" height="160" />*/
  return (
    <Container>
      
      <LoadingIcon size="large" color="#FFFFFF" />
    </Container>
    //Logo da Pagina Principal 
  )
}