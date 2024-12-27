import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'



export default function Hero() {
  return (
    <div>
    <div className=' grid grid-rows-1 lg:grid-cols-2 gap-4 mx-4'>
        <div className='grid place-content-center gap-4'>
                {/** others */}
                <h1 className='text-4xl font-extrabold'>Unite Live Share Blood</h1>
                <p className='text-lg font-light'>
                    Bridinging donors and those in need, making blood donation simple and impactful
                </p>

                <form className='flex flex-row gap-4'>
                    <Input placeholder='Ask Anything' className='max-w-lg  outline-none border-transparent border-0 rounded-sm'/>
                    <Button className='bg-foreground text-background'>
                        Search
                    </Button>
                </form>
        </div>
        <div className='grid place-content-center'>
                {/** image */}
                <Image src={'./hero1.svg'} alt='hero' width={500} height={500}/>
        </div>
        </div>
        <div className='flex flex-auto items-center w-full mt-8'>
            <div className='flex-shrink-0'>
                {/**Left Image */}
                <Image src={'/running.jpg'} alt='running for blood' width={500} height={600}/>
            </div>
            <div className='flex-grow text-center text-md font-bold text-3xl'>
                {/**Text */}
                <h3 className='mb-7'>Every 2 seconds, blood is needed</h3>
            </div>
            <div className='flex-shrink-0'>
                {/**Right Image*/}
                <Image src={'/two_hands.svg'} alt='two hands' width={500} height={600}/>
            </div>
        </div>
        <div className='mt-8'>
            <div>
                {/**Header Text*/}
                <h1 className='flex items-center justify-center text-3xl font-bold'>Why Blood Bridge?</h1>
                <p className='flex items-center justify-center'>A formalaized and Technological Approach to Optimiza Blood Donation and Distribution logistics.</p>
            </div>
            <div className='flex items-center justify-center'>
                {/**Image of bridge*/}
                <Image src={'/bridge.svg'} alt='bridge' width={1000} height={900}/>
            </div>
        </div>
        <div className='mt-8'>
            <div>
                {/**Header Text */}
                <h1 className='flex items-center justify-center font-bold text-3xl'>What We Do?</h1>
            </div>
            <div className='px-10 flex items-center justify-center grid-cols-3 gap-12 ml-8'>
                {/**3 images set to be here*/}
                <div className='ml-4'>
                    {/**left img */}
                    <Image src={'/handshake.svg'} alt='Handshake' width={300} height={300}/>
                    <h1 className='mx-6 font-bold'>Instant Blood Connnection</h1>
                    <p className='mx-6 mt-4'>Quickly connect those in need with donors in real-time</p>
                </div>
                <div className='ml-8'>
                    {/***mid img */}
                    <Image src={'/phone.svg'} alt='phone' width={300} height={300}/>
                    <h1 className='mx-6 font-bold'>Stay Instantly Informed</h1>
                    <p className='mx-6 mt-4'>Receive real-time updates on blood avilability and urgent requests</p>
                </div>
                <div className='ml-5'>
                    {/**right img */}
                    <Image src={'/siren.svg'} alt='siren' width={300} height={300}/>
                    <h1 className='mx-6 font-bold'>Cirtical Alert System</h1>
                    <p className='mx-6 mt-4'>Get immediate notifications for urgent blood needs in your area</p>
                </div>
            </div>
        </div>

        <div className='mt-8 bg-blue-100 p-2'>
                <div>
                    {/**Heading */}
                    <h1 className='text-3xl font-bold flex items-center justify-center mt-11'>How BloodBridge Work?</h1>
                </div>
                <div>
                    <div className='px-12'>
                        {/**Left img */}
                        <Image src={'/map.svg'} alt='map' width={500} height={500}/>
                    </div>
                    <div>
                        {/** Some Info */}
                    </div>
                </div>
        </div>
    </div>
    )
}