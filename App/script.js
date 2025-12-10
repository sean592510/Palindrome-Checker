const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const cleanString = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, ''); // Remove all non-alphanumeric characters
};

const isPalindrome = (str) => {
  const cleaned = cleanString(str);
  if (cleaned === '') return false; // Edge case: empty after cleaning
  return cleaned === cleaned.split('').reverse().join('');
};

const checkPalindrome = () => {
  const inputValue = textInput.value.trim();

  // Empty input check
  if (inputValue === '') {
    alert('Please input a value');
    return;
  }

  const palindrome = isPalindrome(inputValue);

  if (palindrome) {
    result.textContent = `"${inputValue}" is a palindrome`;
    result.style.color = '#a8e6cf'; // Light green
  } else {
    result.textContent = `"${inputValue}" is not a palindrome`;
    result.style.color = '#ff8b94'; // Soft red
  }
};

// Trigger on button click
checkBtn.addEventListener('click', checkPalindrome);

// Bonus: Allow pressing Enter key
textInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkPalindrome();
  }
});
