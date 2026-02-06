import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className='text-center pb-20'>
            <p className='text-2xl font-medium text-gray-800'>Suscribete ahora y obten hasta 20% de descuento</p>
            <p className='text-gray-400 mt-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto mt-10'>
                <input className='w-full sm:flex-1 outline-none border border-gray-300 px-4 py-3' type="email" placeholder='Enter your email address' />
                <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
            </form>
        </div>
    )
}

export default NewsletterBox