import { notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from '../../Redux/Actions/NotificationActions';

const getNotificationStyle = (type) => {
  return {
    success: {
      color: 'rgba(0, 0, 0, 1)',
      border: '1px solid #28fc03',
      backgroundColor: '#28fc03',
    },
    error: {
      color: 'rgba(0, 0, 0, 1)',
      border: '1px solid #ff0000',
      backgroundColor: '#ff0000',
    },
  }[type];
};

function CustomNotification() {
  const dispatch = useDispatch();
  const state = useSelector(({ message }) => message?.state);
  const message = useSelector(({ message }) => message?.message);
  const variant = useSelector(({ message }) => message?.variant);
  return state === true
    ? notification.open({
        message: message,
        duration: 3,
        placement: 'topRight',
        style: getNotificationStyle(variant),
        onClose: () => dispatch(Actions.HideMessage()),
      })
    : '';
}

export default CustomNotification;
