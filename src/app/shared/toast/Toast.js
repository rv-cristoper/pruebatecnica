import { removeElementBody, addElementBody } from './Utils'

import './toast.sass'

export const type = {
  success: "success",
  danger: "danger",
  info: "info",
  warning: "warning"
}

const Toast = (props) => {

  const { type, message } = props

  const getIcon = (type) => {
    let icon = '';
    switch (type) {
      case "success":
        icon = "check-circle"
        break
      case "danger":
        icon = "times-circle"
        break
      case "info":
        icon = "info-circle"
        break
      case "warning":
        icon = "exclamation-circle"
        break
      default:
        icon = "check"
        break
    }
    return icon;
  }


  return (
    <div className={`dashboard_toast--box toast-with-animation`} role="dialog" aria-hidden="true">
      <div className={`dashboard_toast--wrap ${type}`}>
        <div className="iconInfoAlert">
          <span className={`fas fa-${getIcon(type)}`} />
        </div>
        <p className="msmInfoAlert">{message}</p>
      </div>
    </div>
  )
}

const Notification = (type, message) => {
  removeElementBody();
  let t = (
    <Toast
      type={type}
      message={message}
    />
  );
  addElementBody(t);
}

export default Notification;
