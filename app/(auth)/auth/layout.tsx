import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='flex justify-center items-center h-screen flex-col bg-zinc-800'>
        {children}
    </main>
  )
}

export default AuthLayout



// layout.jsx—->smsho main.jsx hai
// Hota render app hai but jo app hota hai to main.jsx
// Simlar render page.jsx but vo hota hai iske andr layout.tsx me


// Hence layout me nav ki trh use kr skte hai 

// tu m kisi folder ke andr bhi layout.jsx bna skte ho vo sirf app  me dikhegi
