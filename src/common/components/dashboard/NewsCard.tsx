import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { INewsCard } from 'src/types/News'


const NewsCard: React.FC<INewsCard> = ({title, description, image, url, time}) => {
  return (
    <Link href={url} className='border-neutral-100 border-b-2 py-3 gap-3 news__container-card  cursor-pointer'>
    <div className={`${!description && "flex"} gap-3 news__container-card-header `}>
        {image && (
        <div className={`${!description  && "max-w-[7rem]"} flex-1  w-full`}>
          <Image
            className="w-full bg-cover"
            src={image}
            height={200}
            width={200}
            alt="banner"
          />
        </div>

        )}
        <div >
        <h3 className="flex-1 news__container-card_title mb-1 text-neutral-600 uppercase  font-semibold">
         { title}
        </h3>
        <p className='text-neutral-400 text-[0.5rem] sm:text-xs'>{time}</p>
        </div>
      </div>
      {description && (
        <p className='text-neutral-600 text-sm mt-0.5'>{description}</p>
      )}
    </Link>
  )
}

export default NewsCard