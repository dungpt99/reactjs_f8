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
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fc6b354591c8d0e52298cb865f15be01~c5_300x300.webp?x-expires=1667401200&x-signature=qg4T7mtbvUmHJTAaFTZJ7DJFulY%3D"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </h4>
        <span className={cx('username')}>Nguyen Van A</span>
      </div>
    </div>
  );
}

export default AccountItem;
