const form = document.getElementById('contact-form');
const success = document.getElementById('success');
const message = document.getElementById('message');
const count = document.getElementById('count');

const validators = {
  name(value) {
    if (!value.trim()) return 'Please enter your full name.';
    if (value.trim().length < 3) return 'Name must contain at least 3 characters.';
    if (!/^[A-Za-z][A-Za-z\s.'-]+$/.test(value.trim())) return 'Use letters and common name characters only.';
    return '';
  },
  email(value) {
    if (!value.trim()) return 'Please enter your email address.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())) return 'Enter a valid email address.';
    return '';
  },
  password(value) {
    if (!value) return 'Please create a password.';
    if (value.length < 8) return 'Password must be at least 8 characters.';
    if (!/[A-Z]/.test(value) || !/[a-z]/.test(value) || !/\d/.test(value)) return 'Include uppercase, lowercase, and a number.';
    return '';
  },
  confirmPassword(value) {
    if (!value) return 'Please confirm your password.';
    if (value !== document.getElementById('password').value) return 'Passwords do not match.';
    return '';
  },
  message(value) {
    if (!value.trim()) return 'Please enter a message.';
    if (value.trim().length < 10) return 'Message must contain at least 10 characters.';
    return '';
  },
  terms(checked) {
    return checked ? '' : 'Please check the confirmation box.';
  }
};

function showFieldState(input, errorText, errorElement) {
  errorElement.textContent = errorText;
  input.classList.toggle('invalid', Boolean(errorText));
  input.classList.toggle('valid', !errorText && input.value.length > 0);
  input.setAttribute('aria-invalid', String(Boolean(errorText)));
}

function validateField(name) {
  if (name === 'terms') {
    const input = document.getElementById('terms');
    const error = validators.terms(input.checked);
    document.getElementById('terms-error').textContent = error;
    input.setAttribute('aria-invalid', String(Boolean(error)));
    return !error;
  }
  const id = name === 'confirmPassword' ? 'confirm-password' : name;
  const input = document.getElementById(id);
  const error = validators[name](input.value);
  showFieldState(input, error, document.getElementById(`${id}-error`));
  return !error;
}

['name', 'email', 'password', 'confirmPassword', 'message'].forEach((name) => {
  const id = name === 'confirmPassword' ? 'confirm-password' : name;
  document.getElementById(id).addEventListener('blur', () => validateField(name));
});

document.getElementById('password').addEventListener('input', () => {
  const confirm = document.getElementById('confirm-password');
  if (confirm.value) validateField('confirmPassword');
});
message.addEventListener('input', () => { count.textContent = message.value.length; });

document.getElementById('terms').addEventListener('change', () => validateField('terms'));

form.addEventListener('submit', (event) => {
  event.preventDefault();
  success.hidden = true;
  const valid = ['name', 'email', 'password', 'confirmPassword', 'message', 'terms'].map(validateField).every(Boolean);
  if (valid) {
    success.hidden = false;
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } else {
    form.querySelector('[aria-invalid="true"]')?.focus();
  }
});
