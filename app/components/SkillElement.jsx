import Image from 'next/image'
import React from 'react'


const SkillElement = ({name, iconURL}) => {
 
  return (
    <div className='p-3 rounded-md bg-white shadow-lg flex flex-col justify-center items-center hover:shadow-none duration-500'>
        <Image className='lg:w-24 lg:h-24 w-24 h-24 ' src={iconURL} alt={(name) + ' icon'} />
        <span className='font-palanquin font-bold text-sm'>
            {name}
        </span>
    </div>
  )
}

export default SkillElement