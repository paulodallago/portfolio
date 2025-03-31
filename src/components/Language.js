import styled from "styled-components";
import { darken } from "polished";

export const Language = (props) => {
  const RangeInput = styled.input`
    -webkit-appearance: none;
    width: 50vw;
    height: 7vh;
    background: linear-gradient(
      to right,
      ${props.color} 0%,
      ${props.color} ${props.value}%,
      ${darken(0.2, props.color)} ${props.value}%
    );
    border-radius: 3.5vh;
    outline: none;
    margin-bottom: 2vh;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 4vh;
      height: 4vh;
      background-image: url(${props.img});
      border-radius: 12px;
      background-size: cover;
      scale: 2;
    }
  `;

  return <RangeInput type="range" className="progress" value={props.value} />;
};
