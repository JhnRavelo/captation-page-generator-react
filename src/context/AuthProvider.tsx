import { createContext, ReactNode, useState } from "react";

export type ContextPropsType = {
  children: ReactNode;
};

export type TypeSetAuth = React.Dispatch<
  React.SetStateAction<TypeAuthUser | null>
>;

export type TypeAuthUser = {
  id: number;
  name: string;
  email: string;
  accessToken: string;
  avatar: string;
};

type TypeAuthContextValue = {
  auth: TypeAuthUser | null;
  setAuth: TypeSetAuth;
};

const AuthContext = createContext<TypeAuthContextValue | null>(null);

const AuthProvider = ({ children }: ContextPropsType) => {
  const [auth, setAuth] = useState<TypeAuthUser | null>(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthProvider };
