import React from 'react'

function Footer() {
  return (
    <div className='text-gray-900 dark:text-gray-100'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
            <div>
                <p className='text-2xl font-bold'>Yocker64</p>
                <p className='text-gray-600 dark:text-gray-400'>Open Source enthusiast currently working as a data scientist</p>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Yocker64</p>
                <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-300'>
                    <li>Home</li>
                    <li>About me</li>
                    <li>Blog</li>
                    <li>Book summaries</li>
                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>Get in touch with me</p>
                <ul className='flex flex-col gap-1 text-gray-600 dark:text-gray-300'>
                    <li>E-mail: mdyoc74@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <div>
            <hr className='border-gray-200 dark:border-gray-800' />
            <p className='py-5 text-sm text-center text-gray-500 dark:text-gray-400'>
                ©Yocker64 2026 — <a href="/privacy" className="hover:underline">Privacy Policy</a> | <a href='/terms' className="hover:underline">Terms</a> | <a href='/cookies' className="hover:underline">Cookie Preferences</a> 
            </p>
        </div>
    </div>
  )
}

export default Footer