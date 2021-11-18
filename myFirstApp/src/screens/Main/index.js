import React, {useContext} from 'react';
import {View, FlatList, Alert, Button, Icon, ListItem} from 'react-native';
import UserContext from '../../contexts/UserContexts';

export default () => {
  const { dispatch: userDispatch } = useContext(UserContext);

  const DeletionProduto = (produtos) =>{
    Alert.alert('Excluir Produto', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          userDispatch({
            type: 'deleteProduto',
            payload: produtos,
          });
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  const getActions = (produtos) => {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('Product', produtos)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => DeletionProduto(produtos)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  }

  const getProdutoItem = ({item: produtos}) => {
    return (
      <ListItem
        bottomDivider
        key={produtos.id}
        onPress={() => props.navigation.navigate('Product', produtos)}>
        <ListItem.Content>
          <ListItem.Title>{produtos.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem rightElement={getActions(produtos)} />
      </ListItem>
    );
  }

  return (
    <View>
      <FlatList
        keyExtractor={(produtos) => produtos.id.toString()}
        data={state.produtos}
        renderItem={getProdutoItem}
      />
    </View>
  );
};