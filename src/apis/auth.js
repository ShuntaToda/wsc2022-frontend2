import { hostPath } from "./hostPath";

export const fetchSignUp = async (username, password) => {
  try {
    console.log({ username, password });
    const path = `${hostPath}/auth/signup`
    const resp = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify({ username, password })
    })
    const data = await resp.json()
    return data
  } catch (e) {
    console.error(e);
  }
}
export const fetchSignIn = async (inputs) => {
  try {
    console.log(inputs);
    const path = `${hostPath}/auth/signin`
    const resp = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(inputs)
    })
    const data = await resp.json()
    return data
  } catch (e) {
    console.error(e);
  }
}