import './css/styles.css';

const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const psw = document.querySelector('#psw');
const pswConf = document.querySelector('#psw-conf');

email.addEventListener('input', () => {
  if (email.validity.typeMismatch) {
    email.reportValidity();
    email.style.borderBottom = '1px solid #ff0000';
  } else if (email.validity.valueMissing) {
    email.setCustomValidity('<error> Please fill in this input field </error>');
    email.reportValidity();
    email.style.borderBottom = '1px solid #ff0000';
  } else {
    email.setCustomValidity('');
    email.style.borderBottom = '1px solid #008000';
  }
});

country.addEventListener('input', () => {
  if (country.validity.valueMissing) {
    country.setCustomValidity('<error> Please fill out this field </error>');
    country.reportValidity();
    country.style.borderBottom = '1px solid #ff0000';
  } else {
    country.setCustomValidity('');
    country.style.borderBottom = '1px solid #008000';
  }
});

zip.addEventListener('input', () => {
  if (zip.validity.valueMissing) {
    zip.setCustomValidity('<error> Please fill out this field </error>');
    zip.reportValidity();
    zip.style.borderBottom = '1px solid #ff0000';
  } else {
    zip.setCustomValidity('');
    zip.style.borderBottom = '1px solid #008000';
  }
});

psw.addEventListener('input', () => {
  if (psw.value.length < 8) {
    psw.setCustomValidity('<error> Password must contain between 8 and 16 characters </error>');
    psw.reportValidity();
    psw.style.borderBottom = '1px solid #ff0000';
  } else if (psw.value.length > 16) {
    psw.setCustomValidity('<error> Password must contain between 8 and 16 characters </error>');
    psw.reportValidity();
    psw.style.borderBottom = '1px solid #ff0000';
  } else {
    psw.setCustomValidity('');
    psw.style.borderBottom = '1px solid #008000';
  }
});

pswConf.addEventListener('input', () => {
  if (pswConf.value !== psw.value) {
    pswConf.setCustomValidity('<error> These two passwords do not match </error>');
    pswConf.reportValidity();
    pswConf.style.borderBottom = '1px solid #ff0000';
  } else {
    pswConf.setCustomValidity('');
    pswConf.style.borderBottom = '1px solid #008000';
  }
});
