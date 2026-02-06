import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20'>
            <div>
                <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Cambios</p>
                <p className='text-gray-400'>Primera</p>
            </div>
            <div>
                <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Devoluciones</p>
                <p className='text-gray-400'>Segunda</p>
            </div>
            <div>
                <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
                <p className='font-semibold'>Servicio al Cliente</p>
                <p className='text-gray-400'>Tercera</p>
            </div>
           
        </div>
    )
}

export default OurPolicy