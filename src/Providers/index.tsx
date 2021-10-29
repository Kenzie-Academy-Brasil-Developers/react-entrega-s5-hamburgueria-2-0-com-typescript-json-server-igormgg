import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { ProductsProvider } from "./Products";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => (
  <AuthProvider>
    <ProductsProvider>{children}</ProductsProvider>
  </AuthProvider>
);

export default Providers;
