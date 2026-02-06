import React from 'react'
import Title from '../../components/Title'
import NewsletterBox from '../../components/NewsletterBox'
// Import your own assets here later
// import { assets } from '../assets/assets' 

const About = () => {
    return (
        <div className='text-gray-900 dark:text-gray-100'>
            <div className='text-2xl text-center pt-8 border-t border-gray-200 dark:border-gray-800'>
                <Title text1={'ABOUT'} text2={'ME'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                {/* Placeholder for your profile picture */}
                <div className='w-full md:max-w-[450px] bg-gray-200 dark:bg-[#242535] rounded-xl h-[450px] flex items-center justify-center border border-gray-800'>
                    <span className="text-gray-500">Profile Image</span>
                </div>
                
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-400'>
                    <p>
                        I am an open-source enthusiast currently working as a <b>Data Scientist</b>. 
                        My journey involves bridging the gap between complex data analysis and functional, 
                        user-centric web development.
                    </p>
                    <p>
                        Currently based in Japan, I spend my time exploring the intersections of software 
                        engineering principles and statistical modeling. When I'm not terminal-hopping in 
                        Arch Linux, you can find me cycling or enjoying Latin dances like Salsa and Bachata.
                    </p>
                    <b className='text-gray-800 dark:text-gray-200'>My Mission</b>
                    <p>
                        My goal is to contribute to the open-source community by building tools that make 
                        data more accessible and insightful. I believe in clean code, reproducible research, 
                        and continuous learning.
                    </p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'FOLLOW ME'}/>
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border dark:border-gray-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b className="text-gray-800 dark:text-gray-100">Technical Depth:</b>
                    <p>I share insights from my "kenshuu" training and real-world data science projects, focusing on practical application over theory.</p>
                </div>
                <div className='border dark:border-gray-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b className="text-gray-800 dark:text-gray-100">Open Source Mindset:</b>
                    <p>Everything I build, from bicycle map applications to MDX-based blogs, is designed with the community in mind.</p>
                </div>
                <div className='border dark:border-gray-800 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b className="text-gray-800 dark:text-gray-100">Cultural Perspective:</b>
                    <p>Writing from Japan, I provide a unique perspective on navigating the tech industry as a developer abroad.</p>
                </div>
            </div>

            <NewsletterBox/>
        </div>
    )
}

export default About