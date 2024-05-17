import object1 from '../../../assets/objectProfile1.png'
import object2 from '../../../assets/objectProfile2.png'
import object3 from '../../../assets/objectProfile3.png'
import object4 from '../../../assets/objectProfile4.png'
import object5 from '../../../assets/objectProfile5.png'
import object6 from '../../../assets/objectProfile6.png'
import object7 from '../../../assets/objectProfile7.png'
import object8 from '../../../assets/objectProfile8.png'
import type { UserProfileOptions } from '@/types'
export type props = {
  option: UserProfileOptions
}
const UserImages = (props: props) => {
  return (
    <div
      className={`w-full  ${props.option.image} absolute top-0 transition-all duration-300`}
    >
      <div className="grid grid-cols-4 grid-rows-2 gap-8 mt-8">
        <div>
          <img src={object1} alt="" />
        </div>
        <div>
          <img src={object2} alt="" />
        </div>
        <div>
          <img src={object3} alt="" />
        </div>
        <div>
          <img src={object4} alt="" />
        </div>
        <div>
          <img src={object5} alt="" />
        </div>
        <div>
          <img src={object6} alt="" />
        </div>
        <div>
          <img src={object7} alt="" />
        </div>
        <div>
          <img src={object8} alt="" />
        </div>
      </div>
    </div>
  )
}
export default UserImages
