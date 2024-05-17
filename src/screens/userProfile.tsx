import Profile from '@/modules/user/components/profile'
import UserImages from '@/modules/user/components/userImages'
import UserModels from '@/modules/user/components/userModals'
import WebOptionsTabs from '@/modules/user/components/webTabs'
import type { UserProfileOptions } from '@/types'
import { useState } from 'react'

const UserProfile = () => {
  const [option, setOption] = useState<UserProfileOptions>({
    model: 'left-[100%]',
    image: 'left-[100%]',
    user: 'left-[0%]',
  })
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#160046] to-[#382160]">
      <div className="w-[1300px] mx-auto  duration-300  pb-[130px] ">
        <WebOptionsTabs setOption={setOption} />
        <div className="relative  w-full min-h-[600px] transiton-all duration-300 overflow-hidden">
          <Profile option={option} />
          <UserImages option={option} />
          <UserModels option={option} />
        </div>
      </div>
    </div>
  )
}
export default UserProfile
