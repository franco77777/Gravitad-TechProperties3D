export type User = {
  fileimage: string | File
  username: string
  email: string
  password: string
  birthDate: string
  taxId: string
  taxIdNumber: string
  phoneNumber: string
  address: string
  objectId?: string
}

export type UserProfileOptions = {
  user: string
  image: string
  model: string
}

export type UserLogin = {
  password: string
  email: string
}
