import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Time } from "../../types";
import InfoIconTooltip from "../base-components/InfoIconTooltip";
import TimeSelect from "../base-components/TimeSelect";
import { StyledBorderWrapper, StyledShadowContainer } from "../styles";


function MaxDuration() {
  return (
    <StyledContainer>
      <StyledTitle>
        <InfoIconTooltip text="some-text">
          <Typography>Max Duration</Typography>
        </InfoIconTooltip>
      </StyledTitle>
      <TimeSelect selected={Time.MINUTES} />
    </StyledContainer>
  );
}

export default MaxDuration;

const StyledContainer = styled(StyledBorderWrapper)({});

const StyledTitle = styled(StyledShadowContainer)({
  paddingRight: 20,
  paddingLeft: 14,
});
