import { useQuery } from "react-query";
import { queryClient } from "../Twap";
import { toWei } from "../utils";

export const useProvider = (provider: any) => {};

export const useSrcToken = () => {
  const key = ["useSrcToken"];
  const data = useQuery(key, () => ({
    amount: "",
    tokenAddress: "usdc",
  })).data;

  return {
    ...data,
    setAmount: (amount?: string) =>
      queryClient.setQueryData(key, (prevData: any) => ({
        ...prevData,
        amount,
      })),
    setAmountFromUi: (amountFromUi?: string) =>
      queryClient.setQueryData(key, { ...data, amount: toWei(amountFromUi) }),
    setTokenAddress: (tokenAddress?: string) =>
      queryClient.setQueryData(key, { ...data, tokenAddress }),
  };
};

export const useDestToken = () => {
  const key = ["useDestToken"];
  const data = useQuery(key, () => {
    return {
      amount: "",
      tokenAddress: "btc",
    };
  }).data;

  return {
    ...data,
    setAmount: (amount?: string) =>
      queryClient.setQueryData(key, { ...data, amount }),
    setAmountFromUi: (amountFromUi?: string) =>
      queryClient.setQueryData(key, { ...data, amount: toWei(amountFromUi) }),
    setTokenAddress: (tokenAddress?: string) =>
      queryClient.setQueryData(key, { ...data, tokenAddress }),
  };
};

export const useChangeTokenPositions = () => {
  const {
    amount: srcTokenAmount,
    tokenAddress: srcTokenAddress,
    setAmount: setSourceTokenAmount,
    setTokenAddress: setSrcTokenAddress,
  } = useSrcToken();
  const {
    amount: destTokenAmount,
    tokenAddress: destTokenAddress,
    setAmount: setDestTokenAmount,
    setTokenAddress: setDestTokenAddress,
  } = useDestToken();

  const method = async () => {
    setSrcTokenAddress(destTokenAddress);
    setDestTokenAddress(srcTokenAddress);
    setSourceTokenAmount(destTokenAmount);
    setDestTokenAmount(srcTokenAmount);
  };

  return method;
};
