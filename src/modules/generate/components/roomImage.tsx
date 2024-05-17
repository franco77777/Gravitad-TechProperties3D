import { GenerateStore } from '@/store/generateStore'
import room from '../../../assets/generateRoom.png'

const RoomImage = () => {
  const roomImage = GenerateStore((state) => state.roomImage)
  const Loader = GenerateStore((state) => state.loader)
  console.log('loader', Loader)

  return (
    <div className="w-full mt-24 flex flex-col justify-center items-start gap-8 ">
      <h3 className="text-white font-extrabold text-3xl">Habitación</h3>
      <div className="h-[446px] mx-auto w-full duration-500 text-white flex items-center justify-center rounded-lg overflow-x-hidden relative">
        {/* {Loader ? (
          <div className="flex justify-center items-center gap-4 ">
            <div>cargando</div>
            <span className="loading loading-dots w-12 text-[#FF48F8]">""</span>
          </div>
        ) : (
          <img
            src={roomImage}
            alt="room-image"
            className="w-full h-full rounded-lg"
          />
        )}
        {!Loader && !roomImage && (
          <img
            src={room}
            alt="room-image"
            className="w-full h-full rounded-lg"
          />
        )} */}
        <div
          className={`flex justify-center  duration-500 items-center gap-4 bg-black h-full w-full absolute top-0 left-0 ${
            Loader ? 'translate-x-[0%]' : 'translate-x-[-100%]'
          }`}
        >
          <div>cargando</div>
          <span className="loading loading-dots w-12 text-[#FF48F8]">""</span>
        </div>
        <img
          src={roomImage}
          alt="room-image1"
          className={` h-full  rounded-lg top-0 left-0 duration-500 z-50 ${
            roomImage ? 'translate-x-[0%]' : 'translate-x-[-100%] w-full'
          }`}
        />
        <img
          src={room}
          alt="room-image2"
          className={`w-full h-full rounded-lg absolute top-0 left-0 duration-500 ${
            !Loader && !roomImage ? 'translate-x-[0%]' : 'translate-x-[100%]'
          }`}
        />
      </div>
      {/* <div className="flex gap-2">
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Sofa
        </button>
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Silla
        </button>
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Escritorio
        </button>
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Mesa
        </button>
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Cama
        </button>
        <button
          type="button"
          className="w-[100px] h-[32px] bg-[#56a8c8] px-4 py-2 text-xs font-bold rounded-md"
        >
          Lampara
        </button>
      </div> */}
    </div>
  )
}
export default RoomImage
