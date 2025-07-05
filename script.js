const BACKEND_URL = 'https://mymotivationalapp-backend.onrender.com';

fetch(`${BACKEND_URL}/upload`, {
  method: 'POST',
  body: formData
});

