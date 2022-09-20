import TokenInput from "../base-components/TokenInput"
import { useSrcToken } from "../store/store"
import { fromWei } from "../utils"

function SrcToken() {
    const {tokenAddress, amount, setAmountFromUi} = useSrcToken()

    const onChange = (value: string) => {
      setAmountFromUi(value)
    }    

    console.log({tokenAddress});
    

  return (
    <TokenInput onChange={onChange} tokenAddress={tokenAddress || ''} amount={fromWei(amount)} />
  )
}

export default SrcToken