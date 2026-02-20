import SignInFormClient from '@/features/auth/components/sign-in-form-client'
import Image from 'next/image'
import React from 'react'

const SignInPage = () => {
  return (
    <>
    {/* image in public folder */}
        <Image src={"/login.png"} alt="Login-Image" height={300} 
        width={300}
        className='m-6 object-cover'
        />
        {/* ye component hai jo hmne call kiya hai features ke auth me component me hoga */}
        <SignInFormClient/>   
    </>
  )
}

export default SignInPage