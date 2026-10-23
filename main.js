(function () {
  'use strict';

  var modal = document.getElementById('confirmModal');
  var message = document.getElementById('modalMessage');
  var cancelBtn = document.getElementById('modalCancelBtn');
  var confirmBtn = document.getElementById('modalConfirmBtn');
  var links = document.querySelectorAll('.download-link');

  if (!modal || !message || !cancelBtn || !confirmBtn) return;

  var downloadUrl = '';
  var lastTrigger = null;

  function isOpen() {
    return modal.classList.contains('show');
  }

  function openModal(trigger) {
    var name = document.createElement('b');
    name.textContent = trigger.dataset.label || 'this file';

    message.textContent = 'Do you want to download ';
    message.appendChild(name);
    message.appendChild(document.createTextNode('?'));

    lastTrigger = trigger;
    downloadUrl = trigger.href;
    modal.classList.add('show');
    document.body.classList.add('modal-open');
    confirmBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
    if (lastTrigger) lastTrigger.focus();
  }

  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      openModal(link);
    });
  });

  confirmBtn.addEventListener('click', function () {
    if (downloadUrl) window.open(downloadUrl, '_blank', 'noopener');
    closeModal();
  });

  cancelBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;

    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      (document.activeElement === confirmBtn ? cancelBtn : confirmBtn).focus();
    }
  });
})();