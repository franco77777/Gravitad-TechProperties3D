import { GenerateStore } from '@/store/generateStore'
import profile from '../assets/objectProfile.png'
import Spline from '@splinetool/react-spline'
const ObjectProfile = () => {
  const SelectCardStore = GenerateStore((state) => state.selectCard)

  return (
    <div className="w-full h-full bg-gradient-to-b from-[#160046] to-[#382160] ">
      <div className="w-fit  mx-auto  text-white  flex flex-col gap-4 pb-24 ">
        {/* <div>
          <img src={profile} alt="" className="w-[235px] h-[235px] " />
        </div> */}
        <div className="rounded-2xl  w-[500px] h-[400px] overflow-hidden">
          <Spline scene={`${SelectCardStore}`} />
        </div>
        <div className="text-3xl font-bold text-center">Título Objeto</div>
        <div className=" flex justify-between">
          <span className="border-r-2 border-[#56a8c8]  w-1/2 text-xs">
            Peso: 10 Mb
          </span>
          <span className=" w-1/2 text-xs text-end">Formato.obj</span>
        </div>
      </div>
    </div>
  )
}

export default ObjectProfile
