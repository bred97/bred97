import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContexts';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from '../Main/style';
import style from "./style";

export default () => {
const [produtos, setProdutos] = useState(route.params ? route.params : {})
  return (
      <View style={style.container}>
          <Text style={style.label}>Description</Text>
          <TextInput
          onChangeText={name => setProdutos({...produtos, name})}
          style={style.inputText}
          placeholder="Digite seu Produto"

          />
          <TouchableOpacity
          style={style.buttonNew}
          >
              <Text style={styles.iconButton}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={style.buttonSair}
          onPress={handleMessageButtonClick}
          >
              <Text style={styles.iconButton}>Sair</Text>
          </TouchableOpacity>
          
          
      </View>
  );
}