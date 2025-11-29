const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const myName = "Louis Andrei L. Del Mundo"; 
const mySection = "BSIT - BA 4101"; 
const myQuote = "\"You have to believe in yourself when no one else does.\" — Serena Williams"; 

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Personal Node App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet">
        <style>
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                font-family: 'Poppins', sans-serif;
                background: radial-gradient(circle at top, #1f8ef1, #161853 60%, #0f0f2d);
                color: #f5f7ff;
            }
            .banner {
                width: min(70rem, 90vw);
                padding: 32px 48px;
                border-radius: 24px;
                background: linear-gradient(135deg, #2b1f6a, #4b2f96);
                box-shadow: 0 30px 80px rgba(8, 8, 40, 0.7);
            }
            .label {
                font-size: 11px;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                opacity: 0.8;
                margin-bottom: 8px;
            }
            .name {
                font-size: 26px;
                margin-bottom: 6px;
            }
            .section {
                font-size: 13px;
                opacity: 0.9;
                margin-bottom: 18px;
            }
            .quote {
                font-size: 13px;
                font-style: italic;
                opacity: 0.9;
            }
        </style>
    </head>
    <body>
        <div class="banner">
            <div class="label">Hello my name is,</div>
            <h1 class="name">${myName}</h1>
            <div class="section">${mySection}</div>
            <div class="quote">${myQuote}</div>
        </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server listening at http://localhost:' + port);
});