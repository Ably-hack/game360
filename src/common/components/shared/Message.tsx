import Image from 'next/image';
import React, { useState } from 'react';

import { HiThumbUp } from 'react-icons/hi';

type Message = {
  name?: string;
  username?: string;
  time?: string;
  message?: string;
  numberOfComments?: string;
  numberOfLikes?: string;
  showBorderTop?: boolean;
  isReply?: boolean;
  children?: React.ReactNode;
};

function Message({
  name,
  username,
  time,
  message,
  numberOfComments,
  numberOfLikes,
  showBorderTop = true,
  isReply = false,
  children,
}: Message) {
  const [liked, setLiked] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleLikeKeyUp: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter') {
      setLiked(!liked);
    }
  };

  const onKeyUpOpenHandler: React.KeyboardEventHandler<HTMLDivElement> = (e: {
    key: string;
  }) => {
    if (e.key === 'Enter') {
      setOpen(!open);
    }
  };

  return (
    <div className={`p-2 ${showBorderTop && 'border-t-2 border-neutral-20'}`}>
      <div className="flex justify-between">
        <div className="flex ">
          <div className="w-[20px] h-[20px] relative mr-1 mt-1">
            <Image
              className="mr-2 rounded-lg bg-black"
              src={`/images/user.png`}
              fill
              style={{
                objectFit: 'contain',
              }}
              alt={'user image'}
            />
          </div>
          <p className="max-w-[80px] max-h-[20px] mt-1 overflow-y-hidden break-keep font-semibold text-sm mr-2 capitalize overflow-x-hidden text-ellipsis">
            {name}
          </p>

          <div className="w-[20px] h-[20px] relative mt-1 mr- 1">
            <Image
              className=""
              src={`/images/verified.png`}
              fill
              style={{
                objectFit: 'contain',
              }}
              alt={'verified-icon'}
            />
          </div>
          <p className=" mr-2 overflow-x-hidden text-ellipsis max-w-[80px] text-neutral-500">
            {username}
          </p>
          <p className="overflow-x-hidden text-ellipsis max-w-[80px] text-neutral-500">
            {time}
          </p>
        </div>
        <div>
          <Image
            className="mr-1"
            src={`/svgs/icon-left.svg`}
            height={20}
            width={20}
            alt={'ellipsis'}
          />
        </div>
      </div>

      <div className="my-3">
        <p className="text-sm text-neutral-800">{message}</p>
      </div>

      <div className=" my-2 flex text-xs text-neutral-500 leading-5">
        <p className="mr-2"> {numberOfComments} comments </p>
        <p> {numberOfLikes} likes</p>
      </div>

      <div className="flex justify-between">
        <div
          className="px-2 py-1 flex"
          onClick={handleLike}
          onKeyUp={handleLikeKeyUp}
          role="button"
          tabIndex={0}>
          {liked ? (
            <HiThumbUp className="my-auto mr-1 text-primary text-lg" />
          ) : (
            <Image
              className="mr-1"
              src={`/svgs/like-icon.svg`}
              height={20}
              width={20}
              alt={'like-icon'}
            />
          )}
          {!isReply && <p className="text-neutral-500">Like</p>}
        </div>

        <div
          className="pr-2 py-1 flex"
          onClick={handleOpen}
          onKeyUp={onKeyUpOpenHandler}
          role="button"
          tabIndex={0}>
          <Image
            className="mr-1"
            src={`/svgs/comment-icon.svg`}
            height={20}
            width={20}
            alt={'comment-icon'}
          />
          {!isReply && <p className="text-neutral-500">Comment</p>}
        </div>

        <div className="px-2 py-1 flex">
          <Image
            className=""
            src={`/svgs/share-icon.svg`}
            height={20}
            width={20}
            alt={'share-icon'}
          />

          {!isReply && <p className="text-neutral-500">Share</p>}
        </div>
      </div>

      {open && (
        <div className=" ml-3 my-3 pl-2 py-2 border-l-2 border-neutral-500 ">
          {children}
        </div>
      )}
    </div>
  );
}

export default Message;
