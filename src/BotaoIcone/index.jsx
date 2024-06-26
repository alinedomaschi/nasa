import { styled } from "styled-components"

const StyledButton = styled.button`
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`
const BotaoIcone = ({ aoFechar, ...props }) => {
  const handleClick = () => {
    if (aoFechar) {
      aoFechar()
    }
  }

  return (
    <StyledButton onClick={handleClick} {...props}>
      {props.children}
    </StyledButton>
  )
}

export default BotaoIcone
