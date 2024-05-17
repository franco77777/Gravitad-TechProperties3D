import Spline from '@splinetool/react-spline'
import Result from '../../../assets/homeResult.png'
import Lamp from '../../../assets/homeResultLamp.png'
import Arrow1 from '../icons/Arrow1.png'
import Arrow2 from '../icons/Arrow2.png'
import Arrow3 from '../icons/Arrow3.png'
import Arrow4 from '../icons/Arrow4.png'
import Arrow5 from '../icons/Arrow5.png'
import Arrow6 from '../icons/Arrow6.png'

const HomeResult = () => {
  return (
    <div className="w-full  home__features_background-image">
      <div className="flex flex-col text-white py-[95px] px-[170px] ">
        <h2 className="font-bold text-3xl ">¿El resultado?</h2>
        <div className="flex  h-[600px]  mt-24 ">
          <div className="w-[600px] h-[570px] my-auto ">
            <Spline scene="https://prod.spline.design/MVGsZKLnxT73MgG0/scene.splinecode" />
          </div>

          {/* <img src={Result} alt="" className="w-[400px] h-[370px] my-auto" /> */}
          <div className="flex flex-col h-full justify-between ">
            <div className=" relative ">
              <img
                src={Arrow1}
                alt=""
                className="absolute bottom-[0%] translate-y-[100%] left-[-16%]"
              />
              <div>Obtén un diseño isométrico del espacio en cuestión.</div>
            </div>
            <div className=" relative ml-32 ">
              <img
                src={Arrow2}
                alt=""
                className="absolute top-[50%] translate-y-[-50%] left-[-30%]"
              />
              <div>
                Descubre soluciones de diseño inspiradas en tus necesidades.
              </div>
            </div>
            <div className=" relative ">
              <img
                src={Arrow3}
                alt=""
                className="absolute top-[0%] translate-y-[-100%] left-[-11%]"
              />
              <div>Encuentra inspiración y diseña según tu propio estilo.</div>
            </div>
          </div>
        </div>
        <div className="flex  h-[500px] mt-40 items-center justify-end">
          <div className="flex flex-col h-full justify-between items-end ">
            <div className=" relative w-fit">
              <img
                src={Arrow4}
                alt=""
                className="absolute bottom-[-50%] translate-y-[100%] right-[-13%]"
              />
              <div>
                Explora modelos 3D creados específicamente para resolver tu
                problema.
              </div>
            </div>
            <div className=" relative mr-32 ">
              <img
                src={Arrow5}
                alt=""
                className="absolute top-[50%] translate-y-[-50%] right-[-18%]"
              />
              <div>Úsalos en tus diseños para una integración perfecta.</div>
            </div>
            <div className=" relative ">
              <img
                src={Arrow6}
                alt=""
                className="absolute top-[0%] translate-y-[-100%] right-[-11%]"
              />
              <div>
                O transforma estos modelos y construye objetos tangibles.
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[370px]">
            <Spline scene="https://prod.spline.design/6vy4FcbDkNNlmd1K/scene.splinecode" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HomeResult
