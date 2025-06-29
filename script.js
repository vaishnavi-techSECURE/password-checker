const passwordInput = document.getElementById('password');
const message = document.getElementById('strength-message');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  const strength = checkStrength(password);
  message.textContent = "Strength: " + strength.label;
  message.style.color = strength.color;
});

function checkStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[\W]/.test(password)) score++;

  if (score <= 2) {
    return { label: "Weak", color: "red" };
  } else if (score <= 4) {
    return { label: "Medium", color: "orange" };
  } else {
    return { label: "Strong", color: "green" };
  }
}
