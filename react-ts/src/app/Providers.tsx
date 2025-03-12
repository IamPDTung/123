import { ReactNode } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { Providers };
