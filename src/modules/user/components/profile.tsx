import type { UserProfileOptions } from '@/types'
import userProfile from '../../../assets/userProfile.png'

export type props = {
  option: UserProfileOptions
}
const Profile = (props: props) => {
  return (
    <div
      className={`w-full   pb-[130px] pt-8 text-white ${props.option.user} absolute top-0 transition-all duration-300`}
    >
      {/* <---------------------------------------------------------------------------------> */}
      <div className="w-[300px]   mx-auto">
        <div className="flex justify-between items-center">
          <div className="w-20 h-20 rounded-lg">
            <img src={userProfile} alt="" />
          </div>
          <div className="bg-[#94c5da] w-[152px] h-[35px] text-[11px] p-[10px] rounded-md text-black">
            Subir una nueva foto
          </div>
        </div>
        {/* <----------------------------------------------------------------------------------------> */}
        <div className="flex flex-col gap-6 mt-12">
          <div>
            <div className="text-xs mb-2 ">Usuario</div>

            <input
              type="text"
              placeholder="Nombre usuario"
              className="input input-bordered w-full max-w-xs bg-white  h-[32px]"
            />
          </div>
          <div>
            <div className="text-xs mb-2">Correo</div>
            <input
              type="text"
              placeholder="correo@correo.com"
              className="input input-bordered w-full max-w-xs bg-white  h-[32px]"
            />
          </div>
          <div>
            <div className="text-xs mb-2 ">Password</div>
            <label className="input input-bordered flex items-center gap-2 h-[32px] bg-white text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <title className="text-black">s</title>
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="password" className="grow " />
            </label>
          </div>
          <button
            type="button"
            className="w-[300px] h-[35px] bg-[#170047] text-white rounded text-xs hover:bg-purple-600"
          >
            Modificar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile
