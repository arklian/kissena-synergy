import 'module-alias/register'
import express from "express";
import eventsRouter from "@routes/events";
import announcementsRouter from "@routes/announcements";
import resourcesRouter from "@routes/resources";
const app = express();

const HOSTNAME = "http://localhost";
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hiya!");
});

app.use("/announcements", announcementsRouter);
app.use("/events", eventsRouter);
app.use("/resources", resourcesRouter);

app.listen(PORT, () => console.log(`Listening on ${HOSTNAME}:${PORT}`));
