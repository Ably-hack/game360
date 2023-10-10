import React, { forwardRef } from 'react';
import NextImage, { StaticImageData } from 'next/image';

type ComponentProps = {
  src: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  width: number;
  height: number;
  blurDataURL?: string;
  className?: string;
};

const Image = forwardRef(
  (
    {
      src,
      alt,
      priority,
      width,
      height,
      blurDataURL,
      className,
    }: ComponentProps ) => {
    blurDataURL = src
      ? blurDataURL ||
        (typeof src === 'string'
          ? src
          : 'blurDataURL' in src && src?.blurDataURL) ||
        ''
      : undefined;

    return (
      <NextImage
        className={className}
        priority={priority || false}
        alt={alt || ''}
        src={src}
        width={width}
        height={height}
        placeholder={blurDataURL ? 'blur' : 'empty'}
        blurDataURL={blurDataURL}
      />
    );
  }
);

Image.displayName = 'Image';

export { Image };
