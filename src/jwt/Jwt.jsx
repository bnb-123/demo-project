import { useJwt } from "react-jwt";
import React from 'react'

let token = "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTc4NjQ0MjAxMywiaWF0IjoxNzg2MzU1NjEzfQ.JalKGA4yE9Vqcv_sj4PxUPW9FDPt69QOL_41EYCTNOc"
const Jwt = () => {

    const  { decodedToken, isExpired  } = useJwt(token);
    console.log(decodedToken , isExpired)
  return (
    <>
    <p>{ isExpired == false ? "user is authorized.." : "user is not authorized" }</p>
    <p>user: {decodedToken?.Username}</p>
    </>
  )
}

export default Jwt