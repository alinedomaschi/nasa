import ModalZoom from "./ModalZoom"
import { useState } from "react"

const MeuComponente = () => {
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const handleCloseModal = () => {
    setFotoSelecionada(null)
  }

  return (
    <div>
      {/* Outros elementos do componente */}
      <ModalZoom foto={fotoSelecionada} aoFechar={handleCloseModal} />
    </div>
  )
}

export default MeuComponente
