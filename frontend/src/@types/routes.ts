import React from "react";
import { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  Home: undefined;
  Forum: undefined;
  Perfil:undefined;
  SignIn: undefined;
  AboutUs: undefined;
  Register: undefined;
  Denuncia: undefined;
  Denuncia2: undefined;
  Denuncia3: undefined;
  InitialRouter: undefined;
  finallyDenuncia: undefined;
  ForgotMyPassword_1: undefined;
};

export type RootScreen<T extends keyof RootStackParamList> = React.FC<StackScreenProps<RootStackParamList, T>>;
