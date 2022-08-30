import { ReactElement } from "react";
import { QueryClientProvider as Provider, QueryClient } from "react-query";

const queryClient = new QueryClient();

interface IQueryClientProvider {
  children: ReactElement;
}

const ApiClientProvider = ({
  children,
}: IQueryClientProvider): ReactElement => (
  <Provider client={queryClient}>{children}</Provider>
);

export default ApiClientProvider;