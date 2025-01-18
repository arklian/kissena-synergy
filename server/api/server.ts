import express from 'express';
import announcementsRouter from './routes/announcements';
const app = express();

const HOSTNAME = "http://localhost"
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("Hiya!");
})

app.use('/announcements', announcementsRouter);

app.listen(PORT, () => console.log(`Listening on ${HOSTNAME}:${PORT}`));