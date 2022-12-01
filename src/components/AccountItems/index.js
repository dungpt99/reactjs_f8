import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('avatar')} src="" alt="" />
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
