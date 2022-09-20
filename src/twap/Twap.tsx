import { CssBaseline } from "@mui/material";
import { Box, styled } from "@mui/system";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {  useChangeTokenPositions, useProvider } from "./store/store";
import { StyledColumnGap } from "./styles";
import ToToken from "./components/DestToken";
import SrcToken from "./components/SrcToken";
import SwapTokensOrder from "./base-components/SwapTokensOrder";
import TradeSize from "./components/TradeSize";
import MaxDuration from "./components/MaxDuration";
import TradeInterval from "./components/TradeInterval";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      cacheTime: 0
    }
  }
});

interface Props {
  provider: any;
}

const Wrapper = ({ provider }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Twap provider={provider} />
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
};

function Twap({ provider }: Props) {
  useProvider(provider);

  const swap = useChangeTokenPositions()


  return (
    <StyledContainer>
      <StyledColumnGap gap={11}>
        <SrcToken />
        <SwapTokensOrder onClick={swap} />
        <ToToken />
      </StyledColumnGap>
      <StyledColumnGap gap={20}>
        <TradeSize />
        <MaxDuration />
        <TradeInterval />
      </StyledColumnGap>
    </StyledContainer>
  );
}

export default Wrapper;

const StyledContainer = styled(Box)({
  background: "#FFFFFF",
  boxShadow: "0px 10px 100px rgba(85, 94, 104, 0.1)",
  borderRadius: 30,
  minHeight: 200,
  padding: 22,
});
