const express = require('express');
const app = express();
const port = process.env.PORT|| 5000;

//data pass
app.get('/', (req, res) => {
    res.send('This is from backend server!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});