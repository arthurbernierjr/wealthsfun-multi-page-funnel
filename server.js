const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3003;

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Load content
const content = require('./content.json');

// Serve static files from public (for any remaining assets)
app.use(express.static(path.join(__dirname, 'public')));

// Routes — render EJS templates with content
app.get('/', (req, res) => {
    res.render('index', { p: content });
});

app.get('/indoctrination', (req, res) => {
    res.render('indoctrination', { p: content });
});

// Backward-compatible .html route
app.get('/indoctrination.html', (req, res) => {
    res.render('indoctrination', { p: content });
});

app.get('/sales', (req, res) => {
    res.render('sales', { p: content });
});

// Backward-compatible .html route
app.get('/sales.html', (req, res) => {
    res.render('sales', { p: content });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
