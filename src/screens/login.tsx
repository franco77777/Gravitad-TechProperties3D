import type React from 'react'
import picture from '../assets/Rectangle.svg'
import LogInForm from '@/modules/auth/components/LogInForm'
import Spline from '@splinetool/react-spline'

const Login = () => {
  return (
    <div className="flex h-[100vh] w-[100%] overflow-hidden">
      <div className="text-white w-1/2 flex items-center justify-center bg-black">
        <div className="w-fit  mx-auto">
          <Spline scene="https://prod.spline.design/72OOFXwqefuj9KHP/scene.splinecode" />
        </div>
        {/* <img
          src={picture}
          className="h-full w-full object-cover"
          alt="img-pic"
        /> */}
      </div>
      <div className="text-white w-1/2 flex items-center justify-center overflow-x-hidden relative">
        <div className="w-[300px]">
          <h1 className="italic text-[20px]">Login</h1>
          <p className="text-[11px] mt-10">* Campos obligatorios</p>
          <LogInForm />
        </div>
      </div>
    </div>
  )
}

export default Login
