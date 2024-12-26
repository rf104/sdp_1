import { Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode'

export default function NavBar() {
  return (
    <div className='flex justify-between items-center p-4'>
        <Link href=''>
        <Image src ={'../icon.svg'} alt='logo' width={50} height = {50}
        quality={30} priority
        />
        </Link>
        <Link  href="/donor">
            <h1>Donor</h1>
        </Link>
        <Link  href="/bloodbank">
            <h1>Blood Bank</h1>
        </Link>
        <Link  href="/hospital">
            <h1>Hospital</h1>
        </Link>
        <Link  href="/ask">
            <h1>Ask</h1>
        </Link>
        <Button className='bg-foreground text-background'>
            Choose User
        </Button>
        <Button className='bg-destructive'>
            Alert
        </Button>

        <Link  href="" >
            <Bell/>
        </Link>
        <ModeToggle/>
    </div>
  )
}

