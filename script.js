const generateBtn = document.getElementById("generateBtn");
const lengthInput = document.getElementById("length");
const resultContainer = document.getElementById("result");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const length = lengthInput.value;

  if (length < 4 || length > 32) {
    alert("Password length must be between 4 and 32");
    return;
  }

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  resultContainer.textContent = password;
}
