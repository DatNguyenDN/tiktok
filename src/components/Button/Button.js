import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

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

Button.propTypes ={
to: PropTypes.string ,
href: PropTypes.string ,
primary  : PropTypes.bool ,
outline  : PropTypes.bool ,
text  : PropTypes.bool,
rounded  : PropTypes.bool,
disable  : PropTypes.bool,
small  : PropTypes.bool ,
large: PropTypes.bool ,
children: PropTypes.node.isRequired ,
onClick: PropTypes.func,
className: PropTypes.string,
leftIcon: PropTypes.node,
rightIcon: PropTypes.node,
}


export default Button;
