import Spline from '@splinetool/react-spline'
import Dicon1 from '../../../assets/dicon1.png'
import Galery1 from '../../../assets/galery1.png'
import Galery2 from '../../../assets/galery2.png'
import Galery3 from '../../../assets/galery3.png'
import Galery4 from '../../../assets/galery4.png'
import Galery5 from '../../../assets/galery5.png'
import Galery6 from '../../../assets/galery6.png'
import Galery7 from '../../../assets/galery7.png'
import Galery8 from '../../../assets/galery8.png'
import type { Cards3D } from '@/modules/generate/components/generateCards'

const GaleryCards = () => {
  const cards: Cards3D = {
    Bed: [
      'https://prod.spline.design/rwRkmyLnrmiGOKmz/scene.splinecode',
      'https://prod.spline.design/Y2C9vvGbr8OwK0wy/scene.splinecode',
      'https://prod.spline.design/3Tlq3T8IWZJVk74G/scene.splinecode',
      'https://prod.spline.design/VGHg64IdAXlw9Xqe/scene.splinecode',
    ],
    Chair: [
      'https://prod.spline.design/enV8efzfjPdNuSf8/scene.splinecode',
      'https://prod.spline.design/ydm4OT2peEC7spNu/scene.splinecode',
      'https://prod.spline.design/eSNy8lOO9anKei5d/scene.splinecode',
      'https://prod.spline.design/Gtu9oBtUzAHN6WbK/scene.splinecode',
    ],
    Desk: [
      'https://prod.spline.design/V1FLjFGJNV6uUOh8/scene.splinecode',
      'https://prod.spline.design/z6iamLvbS6dmyiK8/scene.splinecode',
      'https://prod.spline.design/5IjUkheHZcprWNVU/scene.splinecode',
      'https://prod.spline.design/d1ZZah7nHTcSlaAC/scene.splinecode',
    ],
    Lamp: [
      'https://prod.spline.design/2gxGH9YaY3iDoNdG/scene.splinecode',
      'https://prod.spline.design/sw2VjktMXOeqDqC9/scene.splinecode',
      'https://prod.spline.design/ZqOuvnz746xQCQDK/scene.splinecode',
      'https://prod.spline.design/55McESyL7Me8hkzI/scene.splinecode',
    ],
    Sofa: [
      'https://prod.spline.design/hyYEG7Od5O618MyG/scene.splinecode',
      'https://prod.spline.design/7vv4RfHirLJMFHhW/scene.splinecode',
      'https://prod.spline.design/cY0n9QrBpHsLUqjE/scene.splinecode',
      'https://prod.spline.design/D98qiX-1jrKk7mid/scene.splinecode',
    ],
    Table: [
      'https://prod.spline.design/J84PG4TLNmiwFhAx/scene.splinecode',
      'https://prod.spline.design/3rut6bume0jvAxdd/scene.splinecode',
      'https://prod.spline.design/vSSpvSU5olxan4bS/scene.splinecode',
      'https://prod.spline.design/g-GWtDZ6IxPOLWJS/scene.splinecode',
    ],
  }
  return (
    <div className="mt-12  items-center justify-items-center  pb-[144px]">
      <div className="grid grid-cols-3 grid-rows-3 items-center justify-items-center gap-x-8 gap-y-11 ">
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          {/* <img src={Galery1} alt="" className=" h-[200px] " /> */}
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Bed[0]}`} />
            </div>
          </div>

          <div className="font-bold  text-[#56a8c8] text-[15px]  px-[24px] ">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px] ">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Chair[0]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Desk[0]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Lamp[0]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Table[0]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Bed[1]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Chair[1]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Desk[1]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
        <div className="w-[350px] flex flex-col gap-[24px] bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
          <div className=" w-full bg-[#2d2e32]  ">
            <div className="w-fit mx-auto">
              <Spline scene={`${cards.Lamp[1]}`} />
            </div>
          </div>

          <div className="font-bold text-base text-[#56a8c8] text-[15px]  px-[24px]">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Impulsa tu creatividad con CreativeForge. Simplifica la creación de
            contenido y lleva tus ideas al siguientenivel. ¡Descubre cómo hoy
            mismo.
          </span>
          <div className=" px-[24px]">
            <button
              type="button"
              className="bg-[#56a8c8] w-[200px] h-[36px] rounded-lg text-black px-[10px]"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default GaleryCards
