import { YoutubeTranscript } from "youtube-transcript";
import express from "express";
const app = express();
const port = 3000;
let text = "";
app.use(express.json());

const getTranscript = async (req, res) => {
  const transcript = await YoutubeTranscript.fetchTranscript(
    "https://www.youtube.com/watch?v=PJZQrI-6oTU"
  );

  for (let i = 0; i < transcript.length; i++) {
    text += transcript[i].text + " "
  }
  res.status(200).send(text)
};

app.get(`/transcript`, getTranscript)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
