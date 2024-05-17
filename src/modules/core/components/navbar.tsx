import { UserStore } from '@/store/user/userStore'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const UserLogged = UserStore((state) => state.user)
  const SetUserStore = UserStore((state) => state.setUserStore)
  const SetUserLogOut = UserStore((state) => state.setUserLogOut)
  const UseNavigate = useNavigate()
  const [handleProfileSettings, setHandleProfileSettings] = useState(false)
  const ShowProfileOptions = () => {
    const profile = document.querySelector(
      '[data-profile=profile]'
    ) as HTMLElement
    const signOff = document.querySelector(
      '[data-profile=signOff]'
    ) as HTMLElement
    const containerOptions = document.querySelector(
      '[data-profile=containerOptions]'
    ) as HTMLElement
    console.log(containerOptions)

    if (handleProfileSettings && profile && signOff) {
      containerOptions.style.overflow = 'hidden'
      containerOptions.style.height = '0px'

      signOff.style.marginLeft = '100%'
      setTimeout(() => {
        profile.style.transform = 'translateX(100%)'
      }, 100)
    } else {
      containerOptions.style.height = '120px'
      setTimeout(() => {
        profile.style.transform = 'translateX(0%)'
      }, 150)

      setTimeout(() => {
        signOff.style.marginLeft = '0%'
      }, 300)
      setTimeout(async () => {
        containerOptions.style.overflow = 'visible'
      }, 350)
    }
    setHandleProfileSettings(!handleProfileSettings)
  }

  const LogOut = () => {
    setHandleProfileSettings(false)
    ShowProfileOptions()
    SetUserStore('')
    SetUserLogOut(true)
    UseNavigate('/')
  }

  const EditProfile = () => {
    setHandleProfileSettings(false)
    ShowProfileOptions()
  }

  const SwitchLogin = (value: string) => {
    UserLogged ? UseNavigate(value) : UseNavigate('/login')
  }

  const DisableEslint = () => {}
  return (
    <nav className="flex  text-white justify-between items-center px-[96px] py-[55px] bg-[#160046]">
      <Link to="/">
        <div>logo</div>
      </Link>
      <div className="flex gap-44">
        <div
          onKeyUp={DisableEslint}
          onClick={() => SwitchLogin('/galery')}
          className="cursor-pointer group flex justify-center items-center flex-col gap-1 hover:scale-125 duration-300"
        >
          Galeria
          <div className="group-hover:w-full w-0 bg-[#ff36fd] duration-300 h-1  rounded" />
        </div>

        <div
          onKeyUp={DisableEslint}
          onClick={() => SwitchLogin('/generate')}
          className="cursor-pointer group flex justify-center items-center flex-col gap-1 hover:scale-125  duration-300"
        >
          Generar
          <div className="group-hover:w-full w-0 bg-[#ff36fd] duration-300 h-1  rounded" />
        </div>

        <div>Contacto</div>
      </div>
      {UserLogged ? (
        <ul className="flex flex-col gap-2 ">
          <li
            onKeyUp={DisableEslint}
            onClick={ShowProfileOptions}
            className="cursor-pointer"
          >
            {UserLogged}
          </li>
          <li className="relative w-full  ">
            <div
              data-profile="containerOptions"
              className="absolute overflow-hidden w-full  h-0 bg-[#140023] flex flex-col gap-2  rounded-lg duration-300 transition-all z-50 "
            >
              <Link to="/user-profile" className="hover:scale-105">
                <div
                  onKeyUp={DisableEslint}
                  onClick={EditProfile}
                  data-profile="profile"
                  className=" whitespace-nowrap duration-150 hover:duration-300 ease-in-out translate-x-[100%] text-center  hover:bg-[#FF48F8] rounded-lg py-4  "
                >
                  editar perfil
                </div>
              </Link>
              <div
                onKeyUp={DisableEslint}
                onClick={LogOut}
                data-profile="signOff"
                className=" whitespace-nowrap duration-150 hover:duration-300 ease-in-out ml-[100%] text-center  hover:bg-[#FF48F8] rounded-lg py-4 z-50 cursor-pointer hover:scale-105"
              >
                cerrar sesión
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <div className="flex gap-3 duration-300">
          <Link to="/login">
            <div className="bg-[#311a5a] duration-300 p-[10px] rounded-md hover:bg-[#FF48F8] cursor-pointer hover:scale-105">
              Login
            </div>
          </Link>
          <Link to="/register">
            <div className="bg-[#311a5a] duration-300 p-[10px] rounded-md hover:bg-[#FF48F8] cursor-pointer hover:scale-105">
              Registro
            </div>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
