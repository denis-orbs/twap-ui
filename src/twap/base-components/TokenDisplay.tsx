import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { CSSProperties } from "react";
import { StyledSmallTitle } from "../styles";
import { getTokenImage } from "../utils";

interface props {
  symbol: string;
  imageSize?: string;
}

function TokenDisplay({ symbol, imageSize }: props) {
  return (
    <StyledContainer>
      <StyledLogo size={imageSize} src={getTokenImage(symbol)} />
      <StyledSmallTitle>{symbol}</StyledSmallTitle>
    </StyledContainer>
  );
}

export default TokenDisplay;

const StyledContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 6,
  justifyContent:'center'
});

 const StyledLogo = styled("img")(({ size }: { size?: string }) => ({
  width: size || 30,
  height: size || 30,
}));


