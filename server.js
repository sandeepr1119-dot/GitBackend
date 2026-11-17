
const express = require('express');

const app = express();

app.use(express.json());

// Backend API
app.get('/students', (req, res) => {
    res.json([
        { id: 1, name: 'Rahul', course: 'BCA' },
        { id: 2, name: 'Priya', course: 'MCA' }
    ]);
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
