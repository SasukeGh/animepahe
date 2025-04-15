document.getElementById('checkQueue').addEventListener('click', () => {
    const output = document.getElementById('output');
    output.textContent = "Checking queue... (functionality coming soon)";
    
    // In the future, you’ll fetch the queue and display updates like this:
    // fetch('/api/check-queue').then(res => res.json()).then(data => {
    //   output.textContent = JSON.stringify(data, null, 2);
    // });
  });
  