const { execSync } = require('child_process');

try {
  execSync('npx tailwindcss -i ./src/input.css -o ./public/css/styles.css --watch', { stdio: 'inherit' });
} catch (error) {
  console.error(`Error: ${error.message}`);
}

