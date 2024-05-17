import { GenerateStore } from '@/store/generateStore'
import Arrow from '../icons/arrow.png'
import ArrowUp from '../icons/arrowUp.png'
import close from '../icons/x.svg'
import { useState } from 'react'
import AlertWarning from '@/modules/core/components/alertWarning'

export interface IARequest {
  UID: string
  User: string
  description: string
  data: Data
}

export interface Data {
  prompt: string
  image: string
}

const InputFile = () => {
  //const SetCategoryStore = GenerateStore((state) => state.setCategory);
  //const SetIAResponse = GenerateStore((state) => state.setIAResponse);
  const SetRoomImage = GenerateStore((state) => state.setRoomImage)
  const SetLoader = GenerateStore((state) => state.setLoader)
  //const [imageRemodelIA, setImageRemodelIA] = useState();
  const [cloudinaryImageURL, setCloudinaryImageURL] = useState('')
  const [promp, setPromp] = useState('')
  const [currentImageInputSelected, setCurrentImageInputSelected] = useState('')

  const OpenInputFile = () => {
    const Input = document.getElementById('generateInput')
    Input?.click()
  }

  // const AddInputImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   try {
  //     const formData = new FormData()

  //     const file = e.target.files
  //     if (file) {
  //       console.log('add input image', file)
  //       formData.append('id_params', '025')
  //       formData.append('model', 'model_025')
  //       formData.append('image', file[0])

  //       const rawResponse = await fetch(
  //         'http://192.168.50.214:7101/api/v1/nn/img/',
  //         {
  //           method: 'POST',

  //           body: formData,
  //         }
  //       )

  //       const content = await rawResponse.json()
  //       SetCategoryStore(content.output)
  //       location.href = '#generate-cards'
  //       //SetCategoryStore("Chair");
  //       SetIAResponse(true)
  //       console.log('soy content', content)
  //     }
  //   } catch (error) {
  //     alert('error')
  //     console.log(error)
  //   }
  // }

  const AddInputImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      if (files.length === 0) return

      if (files[0].type.split('/')[0] !== 'image') return

      setCurrentImageInputSelected(URL.createObjectURL(files[0]))
    }

    try {
      const formData = new FormData()

      const file = e.target.files
      if (file) {
        formData.append('file', file[0])
        formData.append('upload_preset', '025_IA_category')
        formData.append('cloud_name', 'dge3tzzsh')

        await fetch('http://api.cloudinary.com/v1_1/dge3tzzsh/image/upload', {
          method: 'POST',

          body: formData,
        })
          .then((res) => res.json())
          .then((res) => {
            setCloudinaryImageURL(res.secure_url)
            return res
          })
          .then((res) => console.log('cloudinary response', res.secure_url))
      }
    } catch (error) {
      //alert("error");
      console.log(error)
    }
  }

  const TestData = async () => {
    const Alert = document.querySelector('[data-login=warning]') as HTMLElement
    const AlertText = document.querySelector(
      '[data-login=warning-text]'
    ) as HTMLElement
    if (!promp) {
      AlertText.innerHTML = 'Escribe um promp'
      Alert.classList.add('alert__animation')
      setTimeout(() => {
        Alert.classList.remove('alert__animation')
      }, 5000)
      return
    }
    if (!cloudinaryImageURL) {
      AlertText.innerHTML = 'Escoge una imagen'
      Alert.classList.add('alert__animation')
      setTimeout(() => {
        Alert.classList.remove('alert__animation')
      }, 5000)
      return
    }
    SetLoader(true)
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      UID: '',
      User: '',
      description: '',
      data: {
        prompt: promp,
        image: cloudinaryImageURL,
      },
    })

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    }

    fetch(
      'http://192.168.50.214:7101/api/v1/replicate/interior-design/',
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        SetLoader(false)
        return res
      })
      .then((res) => SetRoomImage(res.output))
      .then((result) => console.log(result))
      .catch((error) => console.error(error))
  }

  const DisableEslint = () => {}
  return (
    <div className="w-full relative">
      <AlertWarning />
      <div className="w-[1300px]  mx-auto text-white flex  justify-between items-center gap-12 px-[104px]">
        <div className="w-[600px] flex flex-col gap-4 mx-auto">
          <div className="text-base">
            Sube una imagen e indica mediante un promp lo que estás buscando!
          </div>
          <div className=" relative">
            <input
              onChange={(e) => setPromp(e.target.value)}
              type="text"
              placeholder="redacte un prompt para recomendación"
              className="w-full h-[56px] bg-white px-2 rounded-lg text-black"
            />
            <img
              src={Arrow}
              alt=""
              className="w-[18px] h-[17px] absolute top-[50%] right-4 translate-y-[-50%]"
            />
          </div>
          <div className="text-xs">
            Mi habitación tiene un estilo moderno y minimalista. Me gusta
            mantener las cosas simples y ordenadas, con muebles de líneas
            limpias y colores neutros. Busco objetos que añadan un toque de
            elegancia y funcionalidad sin abrumar el espacio. Me encantaría
            encontrar una lámpara de pie que ilumine suavemente el rincón de
            lectura, junto con algunos elementos decorativos sutiles pero con
            estilo para dar vida a las paredes blancas. También estoy buscando
            almacenamiento adicional que sea elegante y práctico al mismo
            tiempo. ¡Gracias por tu ayuda para encontrar los objetos perfectos
            para mi habitación!
          </div>
          <button
            onClick={() => TestData()}
            type="button"
            className="w-[150px] h-[52px] p-5 bg-[#56a8c8] rounded-lg mt-8 text-black font-bold text-xs"
          >
            Generar
          </button>
        </div>
        <div className=" min-h-[364px] bg-white rounded-lg grow flex justify-center items-center relative ">
          {currentImageInputSelected ? (
            <div>
              <div
                onKeyDown={DisableEslint}
                onClick={() => setCurrentImageInputSelected('')}
                className="absolute top-0 right-0 cursor-pointer hover:scale-110 duration-200"
              >
                <img src={close} alt="" className="w-10 h-10" />
              </div>

              <img
                alt=""
                src={currentImageInputSelected}
                className="w-full h-full"
              />
            </div>
          ) : (
            <button
              onClick={OpenInputFile}
              type="button"
              className="w-[158px] h-[52px] border-2 rounded-lg border-black text-black text-xs p-[10px] relative flex justify-center items-center gap-1"
            >
              <div>sube una imagen</div>
              <div className="rounded-full border-[1px] border-black  p-[2px] max-w-max">
                <img src={ArrowUp} alt="" className="w-[7px] h-[7px]  " />
              </div>
              <input
                type="file"
                id="generateInput"
                className="hidden"
                onChange={AddInputImage}
              />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
export default InputFile
