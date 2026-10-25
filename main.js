const box = document.getElementById('box');

box.addEventListener('mousemove', (event) => {
    const rect = box.getBoundingClientRect();
    const x = Math.floor(event.clientX - rect.left);
    const y = Math.floor(event.clientY - rect.top);
    box.textContent = `x: ${x}, y: ${y}`;
});
