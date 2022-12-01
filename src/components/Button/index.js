import React from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  color,
  size,
  disabled,
  rounded,
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  ...passProp
}) {
  let Comp = 'button';
  const classes = cx('wrapper', {
    [color]: color,
    [size]: size,
    [className]: className,
    disabled,
    rounded,
  });
  const props = {
    onClick,
    ...passProp,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}
