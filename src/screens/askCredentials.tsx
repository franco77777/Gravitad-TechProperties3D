import type React from 'react'
import picture from '../assets/Rectangle.svg'
import AskCredInput from '@/modules/auth/components/AskCredInput'
import arrowBack from '../assets/arrow-back-outline.svg'
import { useNavigate } from 'react-router-dom'

const AskCredentials: React.FC = () => {
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
        <div className="flex gap-2 w-[300px] mb-10">
          <img src={arrowBack} className="w-[15px]" alt="img-pic" />
          <a href="/login" className="text-[12px]">
            volver al login
          </a>
        </div>
        <div className="w-[300px] flex flex-col">
          <h1 className="italic text-[20px]">Enviar Credenciales</h1>
          <p className="text-[11px] mt-10">
            Escriba su email, se le enviarán las credenciales de acceso.
          </p>
          <AskCredInput email="" />
        </div>
      </div>
    </div>
  )
}

export default AskCredentials
