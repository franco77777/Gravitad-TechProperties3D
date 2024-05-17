import model1 from '../../../assets/3D1.png'
import model2 from '../../../assets/3D2.png'
import model3 from '../../../assets/3D3.png'
import model4 from '../../../assets/3D4.png'
import type { UserProfileOptions } from '@/types'
export type props = {
  option: UserProfileOptions
}
const UserModels = (props: props) => {
  return (
    <div
      className={`w-full  ${props.option.model} pt-8 absolute top-0 transition-all duration-300 `}
    >
      <div className="grid grid-cols-4 grid-rows-1 text-white ">
        <div className="w-[300px]  flex flex-col   overflow-hidden pb-6 ">
          <img src={model1} alt="" className=" h-[200px]  " />
          <div className="bg-[#111719] grow h-fll p-6 flex flex-col gap-6 rounded-b-xl">
            <div className="font-bold text-[15px] text-[#56a8c8]   ">
              Modelo Reloj-brújula
            </div>
            <span className="  ">
              Impulsa tu creatividad con CreativeForge. Simplifica la creación
              de contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo
              hoy mismo.
            </span>
            <div className=" ">
              <button
                type="button"
                className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg  px-[10px]"
              >
                Ver objeto
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px]  flex flex-col   overflow-hidden pb-6 ">
          <img src={model2} alt="" className=" h-[200px]  " />
          <div className="bg-[#111719] grow h-fll p-6 flex flex-col gap-6 rounded-b-xl">
            <div className="font-bold text-[15px] text-[#56a8c8]   ">
              Modelo Pesa
            </div>
            <span className="  ">
              Impulsa tu creatividad con CreativeForge. Simplifica la creación
              de contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo
              hoy mismo.
            </span>
            <div className=" ">
              <button
                type="button"
                className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg  px-[10px]"
              >
                Ver objeto
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px]  flex flex-col   overflow-hidden pb-6 ">
          <img src={model3} alt="" className=" h-[200px]  " />
          <div className="bg-[#111719] grow h-fll p-6 flex flex-col gap-6 rounded-b-xl">
            <div className="font-bold text-[15px] text-[#56a8c8]   ">
              Modelo Reloj
            </div>
            <span className="  ">
              Impulsa tu creatividad con CreativeForge. Simplifica la creación
              de contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo
              hoy mismo.
            </span>
            <div className=" ">
              <button
                type="button"
                className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg  px-[10px]"
              >
                Ver objeto
              </button>
            </div>
          </div>
        </div>
        <div className="w-[300px]  flex flex-col   overflow-hidden pb-6 ">
          <img src={model4} alt="" className=" h-[200px]  " />
          <div className="bg-[#111719] grow h-fll p-6 flex flex-col gap-6 rounded-b-xl">
            <div className="font-bold text-[15px] text-[#56a8c8]   ">
              Modelo Paragua
            </div>
            <span className="  ">
              Impulsa tu creatividad con CreativeForge. Simplifica la creación
              de contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo
              hoy mismo.
            </span>
            <div className=" ">
              <button
                type="button"
                className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg  px-[10px]"
              >
                Ver objeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default UserModels
