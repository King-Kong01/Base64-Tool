// script.js
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputText');
    const output = document.getElementById('outputText');
    const buttons = document.querySelectorAll('button[data-action]');
  
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        const text = input.value.trim();
  
        if (!text) {
          alert('Please enter some text first.');
          return;
        }
  
        try {
          if (action === 'encode') {
            output.value = btoa(unescape(encodeURIComponent(text)));
          } else {
            // decode
            output.value = decodeURIComponent(escape(atob(text)));
          }
        } catch (e) {
          output.value = '';
          alert('Invalid input for ' + action + '.');
        }
      });
    });
  });
  