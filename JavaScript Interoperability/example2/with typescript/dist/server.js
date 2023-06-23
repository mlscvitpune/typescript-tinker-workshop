import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("hello ts");
});
app.get('/getName', (req, res) => {
    res.send("Arpit Patil");
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
