import type React from 'react'
import picture from '../assets/Rectangle.svg'
import arrowBack from '../assets/arrow-back-outline.svg'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/modules/core/ui/button'

const Sent: React.FC = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/login')
  }

  function disabledEslint() {
    return
  }

  return (
    <div className="flex h-[100vh] w-[100%]">
      <div className="text-white w-1/2 flex items-center justify-center">
        <img
          src={picture}
          className="h-full w-full object-cover"
          alt="img-pic"
        />
      </div>
      <div className="text-white w-1/2 flex items-center justify-center flex-col">
        <div
          className="flex gap-2 w-[300px] mb-10"
          onClick={handleBack}
          onKeyUp={disabledEslint}
        >
          <img src={arrowBack} className="w-[15px]" alt="img-pic" />
          <p className="text-[12px]">volver al login</p>
        </div>
        <div className="w-[300px] flex flex-col">
          <h1 className="italic text-[20px]">Credenciales Enviadas!</h1>
          <p className="text-[11px] mt-10">
            Si su email esta registrado en nuestro sistema recibirá sus
            credenciales de acceso.
          </p>
          <Button
            loading={false}
            className="w-[300px] mt-10 h-[40px] bg-[#56A8C8]"
            onClick={handleBack}
          >
            Volver al login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sent
