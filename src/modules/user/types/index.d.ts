import type { User } from '@/types'

export type UpdateUser = Pick<User, 'email'>

export type userProfileProps = {
  option: UserProfileOptions
  setOption: React.Dispatch<React.SetStateAction<UserProfileOptions>>
}
