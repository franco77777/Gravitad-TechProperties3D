import AlertLogged from '@/modules/core/components/alertLogged'
import { UserStore } from '@/store/user/userStore'
import Spline from '@splinetool/react-spline'
import { useEffect } from 'react'

const Landing = () => {
  const AlertUser = UserStore((state) => state.userLogged)
  const User = UserStore((state) => state.user)
  const SetAlertUser = UserStore((state) => state.setUserAlert)
  const UserLogOut = UserStore((state) => state.userLogOut)
  const SetUserLogOut = UserStore((state) => state.setUserLogOut)

  useEffect(() => {
    const TextAlert = document.querySelector('[data-landing=text-alert]')
    const Alert = document.querySelector('[data-landing=alert]')
    if (AlertUser && Alert && TextAlert) {
      TextAlert.innerHTML = `Bienvenido ${User}`
      setTimeout(() => {
        Alert.classList.add('alert__animation')
      }, 500)

      setTimeout(() => {
        Alert.classList.remove('alert__animation')
        SetAlertUser(false)
      }, 5500)
    }
  }, [AlertUser, User, SetAlertUser])
  useEffect(() => {
    const TextAlert = document.querySelector('[data-landing=text-alert]')
    const Alert = document.querySelector('[data-landing=alert]')
    if (UserLogOut && Alert && TextAlert) {
      TextAlert.innerHTML = `Good bye ${User}`
      setTimeout(() => {
        Alert.classList.add('alert__animation')
      }, 500)

      setTimeout(() => {
        Alert.classList.remove('alert__animation')
        SetUserLogOut(false)
      }, 5500)
    }
  }, [UserLogOut, User, SetUserLogOut])
  console.log('rendering landing')

  return (
    <div className="text-white  flex flex-col gap-8 w-full home__landing_background-image relative overflow-x-hidden">
      <AlertLogged />
      <div className="w-full px-[170px]  flex flex-col gap-8 relative">
        <Spline scene="https://prod.spline.design/Lcev7OSIY-pxpOqP/scene.splinecode" />

        <div className="flex flex-col z-50 font-bold text-[50px] absolute top-0 px-[170px] left-0 py-[100px] gap-8 pointer-events-none">
          <div> Descubre la innovación en</div>

          <h1 className=" home_text__gradiend-color font-extrabold opacity-0">
            {' '}
            Generación de Contenido 3D
          </h1>
          <span className="text-xs">
            Crea modelos 3D de{' '}
            <strong>
              espacios interiores, objetos decorativos y elementos funcionales
            </strong>{' '}
            con tecnología IA de vanguardia para inspirar tus diseños según tus
            preferencias y necesidades específicas con solo unos pocos clics.
          </span>
          <button
            type="button"
            className="p-[10px] duration-300  w-[150px] h-[36px] text-xs font-semibold bg-[#56a8c8] rounded text-black hover:scale-105 pointer-events-auto"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  )
}
export default Landing
