import Image from 'next/image'
import { aboutme } from '../asset/images'
import Link from "next/link"
import {facebook, instagram, linkedin, github, resume, message} from '../asset/icon'


const AboutMe = () => {
    return (
        <section className='flex justify-between md:flex-row flex-col items-center gap-10 bg-white shadow-xl rounded-[20px] p-2 sm:p-10'>
            <div className='w-full md:w-fit flex flex-col items-center justify-center'>
            <div>
            <h1 className='text-4xl font-montserrat font-bold md:hidden block w-full text-start'>
                    About <span className='text-blue-3'>Me</span>
                </h1>
            </div>
                <Image src={aboutme} alt='about me image' className='flex-1 flex justify-center items-center max-w-xl w-full ' />

            </div>
            <div className='flex-1 flex flex-col gap-2 p-5'>
                <h1 className='text-4xl font-montserrat font-bold text-start hidden md:block'>
                    About <span className='text-blue-3'>Me</span>
                </h1>
                <p className=' text-slate-gray text-xl font-montserrat leading-normal'>
                Hello! I'm Harish Pandey, a passionate web designer and developer with a strong foundation in HTML, CSS, JavaScript, and ReactJS. I specialize in crafting visually appealing, user-friendly, and fully responsive websites that deliver seamless experiences across devices.
                </p>
                <p className=' text-slate-gray text-xl font-montserrat leading-normal'>
                Whether building websites from scratch or enhancing existing ones, my goal is to create intuitive, efficient, and engaging online experiences. My journey in web development is driven by my love for problem-solving and continuously learning new techniques to stay on top of the latest industry trends.
                </p>
                <div className='mt-10 flex flex-col justify-center items-start'>
                    <h3 className='text-2xl font-montserrat font-bold'>Feel free for <span className='text-blue-3'>reach me</span> out <span className='text-blue-3'>@</span></h3>
                {/* <ul className='flex gap-2 mt-2 '>
                    <li>
                        <Link href="#">
                            <Image src={facebook} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={instagram} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={linkedin} alt="facebook logo image" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <Image src={github} alt="facebook logo image" />
                        </Link>
                    </li>
                </ul> */}
                <h1 className='text-3xl'>hpandey97088@gmail.com</h1>
            </div>
            </div>
        </section>
    )
}

export default AboutMe