import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({ 
    to, 
    href, 
    primary = false, 
    outline = false, 
    text = false,
    rounded = false,
    disable = false,
    small = false, 
    large=false, 
    children, 
    onClick,
    className,
    leftIcon,
    rightIcon,
    ...passProps }) {
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps
    };

    if (disable)  {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        [className]: className,// khi có className thì lấy giá trị của className làm key
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
