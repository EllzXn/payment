window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loading-overlay').classList.add('fade-out');
      setTimeout(function() {
        document.querySelector('.loading-overlay').style.display = 'none';
      }, 500);
    }, 800);
  });
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
  let selectedMethod = null;

  function selectMethod(method) {
    document.querySelectorAll('.method').forEach(function(el) {
      el.classList.remove('active');
    });
    document.querySelectorAll('.payment-info').forEach(function(el) {
      el.classList.remove('active');
    });
    document.querySelector('.method[data-type="' + method + '"]').classList.add('active');
    document.getElementById(method + '-info').classList.add('active');
    document.getElementById('payment-info-container').classList.add('active');
    document.getElementById('confirm-button').style.display = 'flex';
    document.getElementById('scroll-indicator').classList.remove('hidden');
    const indicator = document.getElementById('selected-method-indicator');
    const methodName = document.getElementById('selected-method-name');
    indicator.classList.add('active');
    methodName.textContent = document.querySelector('.method[data-type="' + method + '"] .method-name').textContent;
    selectedMethod = method;
    setTimeout(function() {
      scrollToPaymentInfo();
    }, 300);
  }
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
  function scrollToPaymentInfo() {
    document.getElementById('payment-info-container').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    setTimeout(function() {
      document.getElementById('scroll-indicator').classList.add('hidden');
    }, 500);
  }
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
  function copyToClipboard(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('Number copied to clipboard!');
  }
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
  function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(function() {
      toast.classList.remove('show');
    }, 3000);
  }
//chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//
  document.getElementById('confirm-button').addEventListener('click', function() {
    if (!selectedMethod) return showToast('Please select a payment method first.');
 //chanell:https://whatsapp.com/channel/0029VanrndJICVfcrjFr3x2R//   
    const phoneNumber = document.querySelector('.payment-info.active .account-number').textContent.replace(/-/g, '');
    window.location.href = `tel:${phoneNumber}`;
  });