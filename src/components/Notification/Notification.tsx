import css from './Notification.module.css';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  return <p className={css.message}>{message}</p>;
};

export default Notification;
