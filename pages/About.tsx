import React from 'react'
import Title from '../components/Title'
import NewsletterBox from '../components/NewsletterBox'
import { assets } from '../assets/assets'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'SOBRE'} text2={'NOSOTROS'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>ExquisParfum nació de nuestra pasión por ofrecer lo mejor en moda y fragancias. Fundada en 2020, comenzamos como una pequeña tienda local y hoy nos hemos convertido en la elección preferida para quienes buscan suéteres de calidad y perfumes exclusivos.</p>
                    <p>Desde nuestro inicio, hemos trabajado incansablemente para seleccionar las mejores materias primas: lana merino de primera calidad para nuestros suéteres y esencias naturales para nuestros perfumes, asegurando que cada producto sea una experiencia sensorial única.</p>
                    <b className='text-gray-800'>Nuestra Misión</b>
                    <p>Nuestra misión en ExquisParfum es abrigar tus días con estilo y aromatizar tus momentos especiales. Nos dedicamos a crear prendas que no solo te mantengan cálido, sino que también expresen tu personalidad, y perfumes que capturen esencias que perduren en la memoria.</p>
                    <p>Creemos que la moda y las fragancias deben ser accesibles para todos, por eso ofrecemos precios justos sin comprometer la calidad. Cada suéter y perfume que vendemos cuenta una historia de artesanía, dedicación y amor por los detalles.</p>
                </div>
            </div>
            <div className='text-xl py-4'>
    <Title text1={'POR QUÉ'} text2={'ELEGIRNOS'}/>
</div>

<div className='flex flex-col md:flex-row text-sm mb-20'>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Garantía de Calidad:</b>
        <p>Seleccionamos y verificamos meticulosamente cada producto para asegurar que cumple con nuestros estrictos estándares de calidad. Nuestros suéteres están hechos con los mejores materiales y nuestros perfumes con esencias puras.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Variedad Exclusiva:</b>
        <p>Ofrecemos una cuidadosa selección de suéteres para todas las estaciones y perfumes que capturan esencias únicas. Desde clásicos atemporales hasta las últimas tendencias en fragancias.</p>
    </div>
    <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Conveniencia:</b>
        <p>Con nuestra interfaz fácil de usar y proceso de pedido sin complicaciones, comprar suéteres y perfumes nunca ha sido tan sencillo. Envío rápido y servicio al cliente disponible 24/7.</p>
    </div>
</div>

<NewsletterBox/>
        </div>
    )
}

export default About