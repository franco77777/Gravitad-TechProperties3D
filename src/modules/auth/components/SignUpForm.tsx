import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import useSignUp from '../hooks/useSignUp'
import { Button } from '@/modules/core/ui/button'
import { signInSchema } from '../schemas'
import UserSignUp from '../hooks/useSignUp'
import { useState } from 'react'
import { useMoralis } from 'react-moralis'
import { UserStore } from '@/store/user/userStore'

interface MyFormValues {
  email: string
  password: string
  name: string
  // repeatPassword: string;
  // photo?: File | null;
}

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const navigate = useNavigate()
  const SetUserStore = UserStore((state) => state.setUserStore)
  const { isInitialized } = useMoralis()

  const initialValues: MyFormValues = {
    email: '',
    password: '',
    name: '',
  }

  const onSubmit = async () => {
    if (password !== password2) {
      alert('incorrect passwords')
      return
    }
    try {
      if (isInitialized) {
        const response = await UserSignUp(email, password, username)
        if (response.status === 'error') {
          alert(response.errorDetails.message)
          return
        }

        SetUserStore(response.user.attributes.email)

        alert('Registro exitoso')
        navigate('/')
      }
    } catch (error) {
      console.error('Error en el registro:', error)
    }
  }

  const goToLog = () => {
    navigate('/login')
  }

  function disabledEslint() {
    return
  }

  const onSubmitFalse = () => {}

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={onSubmitFalse}
      >
        <Form className="w-[300px]">
          <div className="flex flex-col gap-4 mt-10">
            <label className="text-[14px]">Email *</label>
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
            <label className="text-[14px]">Nombre de ususario *</label>
            <Field
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                setUsername(e.currentTarget.value)
              }
              name="name"
              placeholder="Nombre de usuario"
              className="h-[40px] bg-white rounded pl-2 text-black"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label className="text-[14px]">Contraseña *</label>
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
            <label className="text-[14px]">Repita contraseña *</label>
            <Field
              onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
                setPassword2(e.currentTarget.value)
              }
              type="password"
              name="repeatPassword"
              placeholder="*******"
              className="h-[40px] bg-white rounded pl-2 text-black"
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <label className="text-[14px]">Cargar Imagen / Foto</label>
            <Field
              type="file"
              name="photo"
              className="h-[40px] bg-white rounded text-black"
            />
            <ErrorMessage
              name="file"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <Button
              onClick={onSubmit}
              loading={false}
              type="submit"
              className="w-[300px] mt-4 bg-[#56A8C8] text-[#111719] text-[14px] h-[40px] rounded"
            >
              Registrarse
            </Button>
          </div>
          <div
            onClick={goToLog}
            onKeyUp={disabledEslint}
            className="flex gap-4 mt-10"
          >
            <p className="italic">Ya tiene cuenta?</p>
            <span className="underline cursor-pointer">Login</span>
          </div>
        </Form>
      </Formik>
    </>
  )
}

export default SignUpForm
