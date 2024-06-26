import BotaoIcone from "../BotaoIcone"

const Fechamento = ({ aoFechar }) => {
  const handleClose = () => {
    if (aoFechar) {
      aoFechar()
    }
  }

  return (
    <form method="dialog">
      <BotaoIcone formMethod="dialog" onClick={handleClose}>
        <img src="/icones/fechar.png" alt="Icone de fechar" />
      </BotaoIcone>
    </form>
  )
}

export default Fechamento
