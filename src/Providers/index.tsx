import { ReactNode } from "react";
import { AuthProvider } from "./Auth";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => (
  <AuthProvider>{children}</AuthProvider>
);

export default Providers;
