const words = ['Full Stack', 'Front End', 'Back End', 'Java', 'JavaScript',
    'Python', 'React', 'Node.js'];
  let index = 0;

  function changeWord() {
    const wordElement = document.getElementById('dynamic-word');
    wordElement.textContent = words[index];
    index = (index + 1) % words.length;
  }

  setInterval(changeWord, 2000);
  changeWord();