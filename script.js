'use strict';

const adviceText = document.querySelector('.advice-text');
const adviceId = document.querySelector('.advice-id');

const getAdvice = async function () {
  try {
    const res = await fetch('https://api.adviceslip.com/advice');
    if (!res.ok) throw new Error(`Something went wrong (${res.status})`);
    const data = await res.json();
    const { advice, id } = data.slip;
    const html = `<p>${advice}</p>`;

    adviceText.innerHTML = '';
    adviceText.insertAdjacentHTML('afterbegin', html);
    adviceId.textContent = `#${id}`;
  } catch (err) {
    console.error(err);
    adviceText.textContent = `${err.message}`;
  }
};

window.addEventListener('load', getAdvice);
document.querySelector('.dice-icon').addEventListener('click', getAdvice);
