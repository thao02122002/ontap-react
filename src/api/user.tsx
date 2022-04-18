import instance from "./instance";
import { UserType } from "../types/UserType";

export const signup = (user: UserType) => {
  const url = `/users`
  return instance.post(url, user)
}

export const signin = () => {
  const url = `/users`
  return instance.get(url)
}