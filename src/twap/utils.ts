import Web3 from "web3";

export const getTokenImage = (symbol: string) => {
  return require(`./assets/images/tokens/${symbol.toLowerCase()}.svg`);
};


export const toWei = (value?: string) => {
  if(!value){
    return ''
  }
  return Web3.utils.toWei(value)
}


export const fromWei = (value?: string) => {
  if(!value){
    return ''
  }
  return Web3.utils.fromWei(value)
}