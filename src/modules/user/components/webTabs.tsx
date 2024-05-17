import type { UserProfileOptions } from '@/types'

export type props = {
  setOption: React.Dispatch<React.SetStateAction<UserProfileOptions>>
}

const WebOptionsTabs = (props: props) => {
  const ChangeView = (e: React.MouseEvent<HTMLElement>) => {
    const data = e.currentTarget.getAttribute('data-profile')
    const imageElement = document.querySelector(
      "[data-profile='image']"
    ) as HTMLElement
    const userElement = document.querySelector(
      "[data-profile='user']"
    ) as HTMLElement
    const modelElement = document.querySelector(
      "[data-profile='model']"
    ) as HTMLElement

    if (data) {
      switch (data) {
        case 'user':
          imageElement.style.borderColor = '#4a336d'
          userElement.style.borderColor = 'white'
          modelElement.style.borderColor = '#4a336d'
          imageElement.style.color = '#4a336d'
          userElement.style.color = 'white'
          modelElement.style.color = '#4a336d'
          props.setOption({
            user: 'left-[0%]',
            model: 'left-[100%]',
            image: 'left-[100%]',
          })
          break
        case 'image':
          imageElement.style.borderColor = 'white'
          userElement.style.borderColor = '#4a336d'
          modelElement.style.borderColor = '#4a336d'
          imageElement.style.color = 'white'
          userElement.style.color = '#4a336d'
          modelElement.style.color = '#4a336d'
          props.setOption({
            user: 'left-[100%]',
            model: 'left-[100%]',
            image: 'left-[0%]',
          })
          break
        case 'model':
          imageElement.style.borderColor = '#4a336d'
          userElement.style.borderColor = '#4a336d'
          modelElement.style.borderColor = 'white'
          imageElement.style.color = '#4a336d'
          userElement.style.color = '#4a336d'
          modelElement.style.color = 'white'
          props.setOption({
            user: 'left-[100%]',
            model: 'left-[0%]',
            image: 'left-[100%]',
          })
          break

        default:
          break
      }
    }
  }
  return (
    <div className="flex text-xs font-semibold text-white w-full">
      <button
        onClick={(e) => ChangeView(e)}
        type="button"
        className="border-b-2 border-white px-4 py-2 "
        data-profile="user"
      >
        Perfil de usuario
      </button>
      <button
        onClick={(e) => ChangeView(e)}
        type="button"
        className="text-[#4a336d] border-b-2 border-[#4a336d] pr-4 py-2 pl-6"
        data-profile="image"
      >
        Imágenes
      </button>
      <button
        onClick={(e) => ChangeView(e)}
        type="button"
        className="border-b-2 border-[#4a336d] pr-4 pl-6 py-2 text-[#4a336d]"
        data-profile="model"
      >
        Modelos 3d
      </button>
    </div>
  )
}
export default WebOptionsTabs
