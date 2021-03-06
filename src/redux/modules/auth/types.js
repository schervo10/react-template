// @flow
// Flow type for this reducer's initial state
export type AuthState = {
  token: ?string,
  error: ?string,
  isFetching: boolean,
  isAuth: boolean
}

export type LoginParams = {
  username: string,
  password: string,
}
