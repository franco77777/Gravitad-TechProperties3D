import Spline from '@splinetool/react-spline'
import type { Cards3D } from './generateCards'
import { GenerateStore } from '@/store/generateStore'
import { useNavigate } from 'react-router-dom'

const ExampleModels = () => {
  const CategoryStore = GenerateStore((state) => state.category)
  const SetSelectCardStore = GenerateStore((state) => state.setSelectCard)
  const navigate = useNavigate()
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
  const SetCard = (value: number) => {
    console.log('soy value', value)
    if (CategoryStore) {
      SetSelectCardStore(cards[CategoryStore as keyof Cards3D][value])
    } else {
      SetSelectCardStore(
        'https://prod.spline.design/mmouGsXptwlErSAP/scene.splinecode'
      )
    }

    navigate('/object-profile')
  }
  return (
    <div
      id="generate-cards"
      className="grid grid-cols-4 grid-rows-1 items-center justify-items-center gap-x-8   pb-20 relative"
    >
      <div className="w-[300px] flex flex-col gap-6 justify-between h-full bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
        <div className="flex flex-col gap-6">
          <div className="w-[300px] h-[200px]">
            <Spline
              scene={`${
                CategoryStore
                  ? cards[CategoryStore as keyof Cards3D][0]
                  : 'https://prod.spline.design/mmouGsXptwlErSAP/scene.splinecode'
              }`}
            />
          </div>
          <div className="font-bold  text-[#56a8c8] text-[15px]  px-[24px] ">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Un cojín blanco con forma de tornillo.
          </span>
        </div>
        <div className=" px-[24px] ">
          <button
            onClick={() => SetCard(0)}
            type="button"
            className="bg-[#56a8c8] w-[100px] h-[36px] rounded-lg text-black px-[10px] font-bold text-xs"
          >
            Ver
          </button>
        </div>
      </div>
      <div className="w-[300px] flex flex-col gap-6 h-full justify-between bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
        <div className="flex flex-col gap-6">
          <div className="w-[300px] h-[200px]">
            <Spline
              scene={`${
                CategoryStore
                  ? cards[CategoryStore as keyof Cards3D][1]
                  : 'https://prod.spline.design/mmouGsXptwlErSAP/scene.splinecode'
              }`}
            />
          </div>
          <div className="font-bold  text-[#56a8c8] text-[15px]  px-[24px] ">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Una lámpara en forma de vaso, idea para dirigir la luz hacia arriba.
          </span>
        </div>
        <div className=" px-[24px] ">
          <button
            onClick={() => SetCard(1)}
            type="button"
            className="bg-[#56a8c8] w-[100px] h-[36px] rounded-lg text-black px-[10px] font-bold text-xs"
          >
            Ver
          </button>
        </div>
      </div>
      <div className="w-[300px] flex flex-col gap-6  h-full justify-between bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
        <div className="flex flex-col gap-6">
          <div className="w-[300px] h-[200px] ">
            <Spline
              scene={`${
                CategoryStore
                  ? cards[CategoryStore as keyof Cards3D][2]
                  : 'https://prod.spline.design/mmouGsXptwlErSAP/scene.splinecode'
              }`}
            />
          </div>
          <div className="font-bold  text-[#56a8c8] text-[15px]  px-[24px] ">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            Silla uniplaza minimalista, perfecta para decorar habitaciones con
            poco espacio
          </span>
        </div>
        <div className=" px-[24px] ">
          <button
            onClick={() => SetCard(2)}
            type="button"
            className="bg-[#56a8c8] w-[100px] h-[36px] rounded-lg text-black px-[10px] font-bold text-xs"
          >
            Ver
          </button>
        </div>
      </div>
      <div className="w-[300px] flex flex-col gap-6 h-full justify-between bg-[#111719] overflow-hidden pb-6  rounded-[20px]">
        <div className="flex flex-col gap-6">
          <div className="w-[300px] h-[200px]">
            <Spline
              scene={`${
                CategoryStore
                  ? cards[CategoryStore as keyof Cards3D][3]
                  : 'https://prod.spline.design/mmouGsXptwlErSAP/scene.splinecode'
              }`}
            />
          </div>
          <div className="font-bold  text-[#56a8c8] text-[15px]  px-[24px] ">
            CreativeForge
          </div>
          <span className=" px-[24px] text-white text-[11px]">
            El típico reloj clásico que siempre se rompe en las películas.
          </span>
        </div>
        <div className=" px-[24px] ">
          <button
            onClick={() => SetCard(3)}
            type="button"
            className="bg-[#56a8c8] w-[100px] h-[36px] rounded-lg text-black px-[10px] font-bold text-xs"
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  )
}

export default ExampleModels
