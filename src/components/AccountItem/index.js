import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img 
            className={cx('avatar')} 
            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/313127960_2563509337125105_1743630119541912110_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHgtXY0lABr05KE_YmZObns2S18LBCTDWvZLXwsEJMNa-2Az4NhSO_WZT9RExxmbKhIOrrVPFtM6j8EjPIsDIwo&_nc_ohc=herSaaTUOmQAX9Bl5s8&_nc_ht=scontent.fdad3-4.fna&oh=00_AfCW_4hw4sVplmq-su-1eL34vOBhGGqL2sfjW806ueTG4w&oe=65485922" 
            alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dat Nguyen</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>datnguyen</span>
            </div>
        </div>
    );
}

export default AccountItem;
