import client from "./client"

export const getJWT = async(username: string, password: string)=> {
    try{
      const res = await client.post('/user/auth/token/', {username, password})
      return res.data
  
    }catch(e){
      return e
    }
  }