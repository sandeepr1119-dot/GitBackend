
const express = require('express');

const app = express();

app.use(express.json());

// Backend API
app.get('/students', (req, res) => {
    res.json([
        { id: 1, name: 'Ram', course: 'BCA' },
        { id: 2, name: 'Priya', course: 'MCA' }
    ]);
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
