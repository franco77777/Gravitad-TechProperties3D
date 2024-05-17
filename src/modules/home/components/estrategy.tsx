import estrategy from '../../../assets/homeStrategy.png'
import estrategy2 from '../../../assets/homeStrategy2.png'
const HomeEstrategy = () => {
  return (
    <div className="bg-[#170047] text-white flex flex-col items-center justify-center gap-6 w-full  px-[170px] py-20 relative">
      <div className="text-[30px] font-bold">
        "Transforma tu Estrategia de Contenido"
      </div>
      <span className=" text-center text-base">
        Descubre cómo nuestra Plataforma Inteligente revoluciona tu proceso
        creativo con algoritmos avanzados y herramientas intuitivas, guiándote
        desde la idea inicial hasta la publicación final. Libera todo tu
        potencial creativo y maximiza tu productividad con Techproperties.
      </span>
      <button
        type="button"
        className="p-[10px] hover:scale-105 duration-300 w-[150px] h-[36px] text-xs font-semibold bg-[#56a8c8] rounded text-black"
      >
        Comenzar
      </button>
      <img
        src={estrategy}
        alt=""
        className="w-[160px] h-[160px] absolute top-[0px] left-[145px] translate-y-[-50%]"
      />
      <img
        src={estrategy2}
        alt=""
        className="w-[160px] h-[160px] absolute bottom-[0px] right-[145px] translate-y-[50%]"
      />
    </div>
  )
}
export default HomeEstrategy
