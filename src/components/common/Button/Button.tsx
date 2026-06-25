import type { ComponentProps, ReactNode } from 'react';
import styles from './Button.module.css'
import clsx from 'clsx';

type Variant = "solid" | "outlined"
type Color = "gray" | "primary"

type Props = ComponentProps<'button'> & {
    variant ?: Variant,
    color ?: Color
} 


export default function Button ({
    className ,
    variant =  "solid" , 
    color = "primary" ,
     children,
    ...otherProps} : Props) : ReactNode  {

    return <button className={clsx(styles.button , styles[variant] , styles[color] , className)} {...otherProps}>
        {children}
    </button>
}