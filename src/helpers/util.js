import { store } from 'react-notifications-component';

export function notify(type, message) {
  console.log(type, message);
  store.addNotification({
    message: message,
    type: type,
    container: "top-right",
    dismiss: {
      duration: 2000,
      onScreen: true
    }
  });
}
