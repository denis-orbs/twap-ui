import TokenInput from "../base-components/TokenInput"
import { useDestToken } from "../store/store"
import { fromWei } from "../utils"

function ToToken() {
    const {tokenAddress, amount, setAmountFromUi} = useDestToken()

    const onChange = (value: string) => {
      setAmountFromUi(value)
    }  
    
    

  return (
    <TokenInput onChange={onChange} tokenAddress={tokenAddress || ''} amount={fromWei(amount)} />
  )
}

export default ToToken