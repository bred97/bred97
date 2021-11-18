import React, {createContext, useReducer} from 'react';
import produtos from '../data/produtos';

const initialState = {produtos};
const UserContext = createContext({});

const actions = {
  createUser(state, action) {
    const produtos = action.payload;
    produtos.id = Math.random();
    return {
      ...state,
      produtos: [...state.produtos, produto],
    };
  },
  updateUser(state, action) {
    const update = action.payload;
    return {
      ...state,
      produtos: state.produtos.map((u) => (u.id === update.id ? update : u)),
    };
  },
  deleteUser(state, action) {
    const produto = action.payload;
    return {
      ...state,
      produtos: state.produtos.filter((u) => u.id !== produto.id),
    };
  },
};

export const UserProvider = (props) => {
  function reducer(state, action) {
    const fn = actions[action.type];
    return fn ? fn(state, action) : state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;