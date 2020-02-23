import * as React from "react"
import styled from "styled-components"

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  height: 30px;
  width: 30px;
  cursor: pointer;
  
  &:hover {
    line {
     stroke: #ea0000;
    }
  }
`

const Svg = styled.svg`
  width: 100%;
  height: 100%;
`

const Line = styled.line`
  stroke: #a30000;
  stroke-width: 20;
  stroke-linecap: round;
`

interface IProps {
  onClick(event: React.SyntheticEvent): void;
}

const CloseButton = React.memo(({
  onClick,
}: IProps) => {

  return (
    <Button className="close-button" onClick={onClick} type="button">
      <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <Line x1="20" y1="20" x2="80" y2="80" />
        <Line x1="20" y1="80" x2="80" y2="20" />
      </Svg>
    </Button>
  )
})

export default CloseButton
