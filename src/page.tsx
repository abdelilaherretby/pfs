'use client'

import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import SloganSection from './components/SloganSection'
import HeaderSection from './components/HeaderSection'
import DevisesSection from './components/DevisesSection'
import GalerieSection from './components/GalerieSection'
import {getCarList} from '../Services'
import {useEffect, useState} from 'react'



const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function Page() {
    const [carList, setCarList] = useState([])
  
    useEffect(() => {
    getCars()
  }, [])

    const getCars = async () => {
        const result: any = await getCarList()
        console.log(result.carLists)
        setCarList(result.carLists)
    }

    
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <main>
        <SloganSection />
        <HeaderSection />
        <DevisesSection />
        <GalerieSection carList={carList} />
      </main>
    </ClerkProvider>
  )
}

