import create from 'zustand'

type User = {
    cpf:    string;
    nome:   string;
    email:  string;
    senha:  string;
}

export interface UsersState {
  currentUser: User
}

export const useCurrentUser = create<UsersState>((set, get) => {
  const initialState: UsersState = {
    currentUser: {
    cpf:'',
    nome:'',
    email:'',
    senha:''
    },
  }

  return initialState
})