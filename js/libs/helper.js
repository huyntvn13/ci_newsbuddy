/**
 * helper - for NewsBuddy
 *
 * <huyntvn13.it@gmail.com>
 */
 
define(['jquery'], function ($) {
  return {
    showNotification: function (messageText, typeStyle, selector) {
      typeStyle = typeof typeStyle !== 'undefined' ? typeStyle : 'blackgloss';
      selector = typeof selector !== 'undefined' ? selector : '#default-notify';
      $(selector).notify({
        message: { text: messageText },
        type: typeStyle,
      }).show();
    }
  }
}); 
