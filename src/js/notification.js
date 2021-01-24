import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';
// import 'material-design-icons/iconfont/material-icons.css';
import 'pnotify/dist/PNotifyBrightTheme.css'
// PNotify.defaults.styling = 'material';
// PNotify.defaults.icons = 'material';

 export function notificationError(error) {
  PNotify.error({
    text: error,
    delay: 2000,
    animateSpeed: 'slow',
  });
}

export function notificationAlert(alert) {
  PNotify.alert({
    text: alert,
    type: 'notice',
    delay: 2000,
    animateSpeed: 'slow',
  });
}