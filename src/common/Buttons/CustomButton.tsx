import React from 'react';

type CustomButton = {
  text: string;
  rounded?: boolean;
  filled?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  rest?: HTMLButtonElement;
};

export function CustomButton({
  text = 'Button',
  rounded = true,
  filled = false,
  disabled = false,
  className = '',
  children,
  ...rest
}: CustomButton) {
  if (disabled) {
    return (
      <button
        className={`inline-block ${rounded ? 'rounded-full' : 'rounded-md'} 
                        border-2 border-primary ${filled ? 'bg-primary' : ''} 
                        px-6 pt-2 pb-[6px] my-3 text-xs font-bold uppercase 
                        opacity-50 cursor-not-allowed
                       ${className}`}>
        {children} {text}
      </button>
    );
  } else {
    return (
      <button
        {...rest}
        className={`inline-block ${rounded ? 'rounded-full' : ''} 
                            border-2 border-primary ${
                              filled ? 'bg-primary' : ''
                            } 
                            px-6 pt-2 pb-[6px] my-3 text-xs font-bold uppercase 
                            leading-normal transition duration-150 ease-in-out
                            hover:bg-primary hover:bg-opacity-10 focus:outline-none
                            focus:ring-0 dark:hover:bg-primary dark:hover:bg-opacity-40 
                            ${className}`}>
        {children} {text}
      </button>
    );
  }
}
