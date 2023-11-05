import {forwardRef, useState} from 'react';
import images from '@/assets/images'
import styles from './Image.module.scss'
import classNames from 'classnames';


const Image = forwardRef(({src, alt, className, ...props }, ref) =>  {
    const [fallback, setFallback] = useState('') // xử lý khi ảnh bị died
    const handleError = () => {
       setFallback (images.noImage)
    }
    return 
        // eslint-disable-next-line jsx-a11y/alt-text, no-unreachable
        <img 
        className={classNames(styles.wrapper, className)}
        ref={ref} 
        src={fallback || src} 
        alt={alt} {...props} 
        onError={handleError} 
        />

});

export default Image;