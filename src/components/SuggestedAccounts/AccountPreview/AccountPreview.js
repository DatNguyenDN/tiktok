import Button from '@/components/Button';
import styles from './AccountPreview.module.scss'
import classNames from 'classnames/bind';

import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fcb942d9254d208d29f3ff476bcffce4~c5_100x100.webp?x-expires=1699635600&x-signature=78XhoXqh%2Fe0SbDbbXbBCxgWpKqs%3D' alt=''/> 
                   <div> 
                        <Button className={cx('follow-btn')} primary>Follow</Button>
                    </div>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                                <strong>datnguyenptg</strong>
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Dat Nguyen Cong</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.7M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>

                </p>
            </div>
        </div>
    );
}

export default AccountPreview;