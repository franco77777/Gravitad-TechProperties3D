import type React from 'react'
import picture from '../assets/Rectangle.svg'
import SignUpForm from '@/modules/auth/components/SignUpForm'
import Spline from '@splinetool/react-spline'

const Register = () => {
  return (
    <div className="flex h-[100vh] w-[100%]">
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
      <div className="text-white w-1/2 flex items-center justify-center flex-col">
        <div className="w-[300px]">
          <h1 className="italic text-[20px]">Register</h1>
          <p className="text-[11px] mt-10">* Campos obligatorios</p>
        </div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default Register
