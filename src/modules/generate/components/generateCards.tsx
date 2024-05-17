import { Link, useNavigate } from 'react-router-dom'
import Generate1 from '../../../assets/generate1.png'
import Generate2 from '../../../assets/generate2.png'
import Generate3 from '../../../assets/generate3.png'
import Generate4 from '../../../assets/generate4.png'
import Spline from '@splinetool/react-spline'
import { GenerateStore } from '@/store/generateStore'
import { Key, useEffect, useState } from 'react'
import AlertLogged from '@/modules/core/components/alertLogged'
import ExampleModels from './exampleModels'
import Moralis from 'moralis-v1'
import { Services } from '@/services'

export type Cards3D = {
  Bed: string[]
  Chair: string[]
  Desk: string[]
  Lamp: string[]
  Sofa: string[]
  Table: string[]
}

const GenerateCards = () => {
  const [categorySelected, setcategorySelected] = useState('')
  const SetCategoryStore = GenerateStore((state) => state.setCategory)

  //const [categorySelected, setCategorySelected] = useState("");

  const CloudinaryCategories = {
    Bed: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715628972/dataset_images/025/IA_category/bed1_s8ewoq.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715628994/dataset_images/025/IA_category/bed2_fqkuaq.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629002/dataset_images/025/IA_category/bed3_ek39sj.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629018/dataset_images/025/IA_category/bed4_boqf57.jpg',
    ],
    Chair: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629051/dataset_images/025/IA_category/chair1_pfdtky.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629058/dataset_images/025/IA_category/chair2_zvwzzx.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629071/dataset_images/025/IA_category/chair4_i8jz5w.jpg',
    ],
    Desk: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629127/dataset_images/025/IA_category/desk1_g8rsjh.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629134/dataset_images/025/IA_category/desk2_zvqnww.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629148/dataset_images/025/IA_category/desk4_bnjgw5.jpg',
    ],
    Lamp: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629171/dataset_images/025/IA_category/lamp1_yk45lh.jpg',
    ],
    Sofa: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629194/dataset_images/025/IA_category/sofa1_hhbpf6.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629209/dataset_images/025/IA_category/sofa3_zb5tsn.jpg',
    ],
    Table: [
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629276/dataset_images/025/IA_category/table1_mmmcmb.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629283/dataset_images/025/IA_category/table2_gsucng.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629290/dataset_images/025/IA_category/table3_p6ciet.jpg',
      'https://res.cloudinary.com/dge3tzzsh/image/upload/v1715629299/dataset_images/025/IA_category/table4_qwqed3.jpg',
    ],
  }

  // grid-cols-[repeat(auto-fit,minmax(150px,1fr))]
  const SendCloudinaryImage = async (value: string) => {
    console.log('sending url image to api', value)

    const result = await Moralis.Cloud.run(Services.IA.getCategory, {
      objectData: {
        imageUrl: value,
      },
    })
    SetCategoryStore(result.data)

    console.log('api response', result)
  }

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setcategorySelected(e.target.value)
    console.log(e.target.value)
  }
  const disableEslint = () => {}
  return (
    <div className="mt-12">
      <select
        onChange={(e) => selectCategory(e)}
        className="select w-full max-w-xs bg-white relative duration-300 mb-12"
      >
        <option value="" disabled selected className="">
          Escoge una categoría
        </option>
        <option value="Bed">Cama</option>
        <option value="Desk">Escritorio</option>
        <option value="Chair">Silla</option>
        <option value="Sofa">Sofa</option>
        <option value="Table">mesa</option>
      </select>

      <div
        className={`grid  gap-4 grid-cols-5 auto-rows-[200px] duration-500  mb-12 ${
          categorySelected ? 'h-[200px]' : 'h-0'
        }`}
      >
        {categorySelected &&
          CloudinaryCategories[categorySelected as keyof Cards3D].map((e) => (
            <div key={e}>
              <img
                onKeyDown={disableEslint}
                onClick={() => SendCloudinaryImage(e)}
                src={e}
                alt=""
                className="w-full h-full rounded-lg cursor-pointer"
              />
            </div>
          ))}
      </div>
      <ExampleModels />
    </div>
  )
}
export default GenerateCards
