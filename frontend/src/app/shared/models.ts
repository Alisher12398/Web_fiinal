export interface IUser {
  id: number,
  username: string,
  email: string
}

export interface IProduct {
  id: number,
  name: string,
  price: number,
  quantity: number,
}

export interface IAuthResponse {
  token: string;
}

export interface IUserProduct {
  id: number,
  user: IUser
  product: IProduct,
  count: number,
}

export interface IUserProduct2 {
  id: number,
  user: IUser
  product: IProduct,
  count: number,
}

