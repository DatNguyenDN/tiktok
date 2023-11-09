import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            
            <img 
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/fcb942d9254d208d29f3ff476bcffce4~c5_100x100.webp?x-expires=1699635600&x-signature=78XhoXqh%2Fe0SbDbbXbBCxgWpKqs%3D' alt=''
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>datnguyenptg</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <p className={cx('name')}>Dat Nguyen Cong</p>
            </div>
        </div>
    );
}
AccountItem.propTypes ={};

export default AccountItem;