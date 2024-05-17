import Feature1 from '../../../assets/homeFeature1.png'
import Feature2 from '../../../assets/homeFeature2.png'
import Feature3 from '../../../assets/homeFeature3.png'
const FeatureIntro = () => {
  return (
    <div className="px-[170px] w-full py-[95px] ">
      <h2 className="font-bold text-3xl text-white pb-24">
        ¡Hazlo realidad! Así es como funciona:
      </h2>
      <div className="grid grid-cols-3 gap-24 ">
        <div className="w-[266px] flex flex-col gap-5 justify-center items-center">
          <img
            src={Feature1}
            alt=""
            className=" w-[180px] h-[140px] object-cover  "
          />
          <div className="home_text__gradiend-color text-base ">
            Sube una imagen
          </div>
          <span className="text-white text-xs">
            Comienza subiendo una fotografía del espacio interior del que
            necesitas algo, ya sea extraer algún elemento, añadir uno nuevo o
            mejorar algún aspecto específico.
          </span>
        </div>
        <div className="w-[266px] flex flex-col gap-5 justify-center items-center mx-auto">
          <img
            src={Feature2}
            alt=""
            className=" w-[180px] h-[140px] object-cover mx-auto "
          />
          <div className="home_text__gradiend-color ">Sube una imagen</div>
          <span className="text-white text-xs">
            Comienza subiendo una fotografía del espacio interior del que
            necesitas algo, ya sea extraer algún elemento, añadir uno nuevo o
            mejorar algún aspecto específico.
          </span>
        </div>
        <div className="w-[266px] flex flex-col gap-5 justify-center items-center ml-auto">
          <img
            src={Feature3}
            alt=""
            className="w-[180px] h-[140px] object-cover mx-auto "
          />
          <div className="home_text__gradiend-color ">Sube una imagen</div>
          <span className="text-white text-xs">
            Comienza subiendo una fotografía del espacio interior del que
            necesitas algo, ya sea extraer algún elemento, añadir uno nuevo o
            mejorar algún aspecto específico.
          </span>
        </div>
      </div>
    </div>
  )
}
export default FeatureIntro
