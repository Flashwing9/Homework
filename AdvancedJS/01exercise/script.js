const button = document.querySelector("button");
button.addEventListener("click", generateTitle());

function generateTitle() {
    const color = document.getElementById('colorInput').value;
    const fontSize = document.getElementById('fontSizeInput').value;
    const text = document.getElementById('textInput').value;
    const newTitle = document.createElement('h1');
    
    newTitle.style.color = color;
    newTitle.style.fontSize = fontSize;
    newTitle.textContent = text;

    const titleContainer = document.getElementById('titleContainer');
    titleContainer.innerHTML = '';
    titleContainer.appendChild(newTitle);
}