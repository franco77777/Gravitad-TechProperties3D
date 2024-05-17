import { Button } from '@/modules/core/ui/button'
import ButtonPrimary from '@/modules/core/ui/button/buttonPrimary'
import { Formik, Form, Field } from 'formik'
import type React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface Props {
  email: string
}

const AskCredInput: React.FC<Props> = ({ email }: Props) => {
  const navigate = useNavigate()

  const handleSendCredentials = () => {
    navigate('/sent')
  }

  return (
    <Formik initialValues={{ email: email }} onSubmit={() => {}}>
      <Form>
        <div className="flex flex-col gap-4 mt-10">
          <label htmlFor="email" className="text-[14px]">
            Email *
          </label>
          <Field
            name="email"
            placeholder="Escriba su email"
            className="h-[40px] bg-white rounded pl-2 text-black"
          />
        </div>
        <Link to={'/sent'}>
          <Button
            loading={false}
            className="w-[300px] mt-10 h-[40px] bg-[#56A8C8]"
            onClick={handleSendCredentials}
          >
            Enviar credenciales
          </Button>
        </Link>
      </Form>
    </Formik>
  )
}

export default AskCredInput
