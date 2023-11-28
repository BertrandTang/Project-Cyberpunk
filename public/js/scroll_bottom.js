  function scrollToBottom() {
    var scrollContainer = document.querySelector('.window-content');
    scrollContainer.scrollTop = scrollContainer.scrollHeight - scrollContainer.clientHeight;
  }