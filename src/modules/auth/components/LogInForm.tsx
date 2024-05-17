import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '@/modules/core/ui/button'

import { LogInSchema } from '../schemas'
import { useState } from 'react'
import { LoginUser } from '../hooks/useLogIn'
import Moralis from 'moralis-v1'
import { UserStore } from '@/store/user/userStore'
import AlertWarning from '@/modules/core/components/alertWarning'

interface MyFormValues {
  email: string
  password: string
}

const LogInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const initialValues: MyFormValues = { email: '', password: '' }
  const navigate = useNavigate()
  const SetUserStore = UserStore((state) => state.setUserStore)
  const SetUserAlert = UserStore((state) => state.setUserAlert)

  const onSubmit = async () => {
    const Alert = document.querySelector('[data-login=warning]') as HTMLElement
    const AlertText = document.querySelector(
      '[data-login=warning-text]'
    ) as HTMLElement
    try {
      const response = await Moralis.User.logIn(email, password)
      SetUserStore(response.attributes.username)
      console.log(response)

      //AlertText.innerHTML = response.attributes.username
      //Alert.classList.add('alert__animation')
      SetUserAlert(true)

      navigate('/')
    } catch (error) {
      //alert("Error de sesión");
      AlertText.innerHTML = (error as Error).message
      Alert.classList.add('alert__animation')
      setTimeout(() => {
        Alert.classList.remove('alert__animation')
      }, 5000)
    }
  }

  const goRegister = () => {
    navigate('/register')
  }

  const goForgotCredentials = () => {
    navigate('/askCredentials')
  }

  function disabledEslint() {
    return
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInSchema}
        onSubmit={onSubmit}
      >
        <Form className="">
          <div className="flex flex-col gap-4 mt-10 ">
            <AlertWarning />
            <label htmlFor="email" className="text-[14px]">
              Email *
            </label>
            <Field
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                setEmail(e.currentTarget.value)
              }
              name="email"
              placeholder="Email"
              className="h-[40px] bg-white rounded pl-2 text-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="password" className="text-[14px]">
              Contraseña *
            </label>
            <Field
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                setPassword(e.currentTarget.value)
              }
              type="password"
              name="password"
              placeholder="*******"
              className="h-[40px] bg-white rounded pl-2 text-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <div
              className="underline italic text-[12px] cursor-pointer"
              onClick={goForgotCredentials}
              onKeyUp={disabledEslint}
            >
              Olvidó su password ?
            </div>
            {/* <Link to="/askCredentials"> */}
            <Button
              loading={false}
              type="submit"
              className="w-[300px] mt-4 bg-[#56A8C8] text-[#111719] text-[14px] h-[40px] rounded"
            >
              Login
            </Button>
          </div>
          <div
            onClick={goRegister}
            onKeyUp={disabledEslint}
            className="flex gap-4 mt-10"
          >
            <p className="italic">No tiene cuenta?</p>
            <span className="underline cursor-pointer">Registrese</span>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default LogInForm
