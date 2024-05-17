import AlertGenerateCards from '@/modules/core/components/alertGenerateCards'
import AlertLogged from '@/modules/core/components/alertLogged'
import GenerateCards from '@/modules/generate/components/generateCards'
import InputFile from '@/modules/generate/components/inputFile'
import RoomImage from '@/modules/generate/components/roomImage'
import { GenerateStore } from '@/store/generateStore'
import { useEffect } from 'react'

const Generate = () => {
  const CategoryStore = GenerateStore((state) => state.category)
  const IAResponseStore = GenerateStore((state) => state.IAResponse)
  const SetIAResponseStore = GenerateStore((state) => state.setIAResponse)
  useEffect(() => {
    const TextAlert = document.querySelector('[data-landing=text-alert]')
    const Alert = document.querySelector('[data-landing=alert]')
    if (IAResponseStore && Alert && TextAlert) {
      TextAlert.innerHTML = `IA response: ${CategoryStore}`
      setTimeout(() => {
        Alert.classList.add('alert__animation')
      }, 500)

      setTimeout(() => {
        Alert.classList.remove('alert__animation')
        SetIAResponseStore(false)
      }, 5500)
    }
  }, [IAResponseStore, CategoryStore, SetIAResponseStore])

  return (
    <div className="bg-gradient-to-b w-full from-[#160046] to-[#402966] overflow-x-hidden relative">
      <InputFile />
      <AlertGenerateCards />
      <div className="w-[1300px] mx-auto">
        <RoomImage />
        <GenerateCards />
      </div>
    </div>
  )
}
export default Generate
