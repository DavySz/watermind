import create from 'zustand'

type Denuncia = {
    cpf: string
    latitude: string
    logitude: string
    descricao: string
    data: string
    hora: string

}

export interface DenunciasState {
  Denuncia: Denuncia
}

export const useDenuncia = create<DenunciasState>((set, get) => {
  const initialState: DenunciasState = {
    Denuncia: {
        cpf: '',
        latitude: '',
        logitude: '',
        descricao: '',
        data: '',
        hora: '',
    },
  }

  return initialState
})