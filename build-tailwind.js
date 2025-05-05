const { exec } = require('child_process');
exec('npx tailwindcss -i ./src/input.css -o ./public/css/styles.css --watch', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
