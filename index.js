import { YoutubeTranscript } from "youtube-transcript"
import express from "express"
const app = express()
const port = 3000
let text = ""
app.use(express.json())

const getTranscript = async (req, res) => {
  const baseUrl = "https://www.youtube.com/watch?v="
  const id = req.params.id
  const url = baseUrl + id
  const transcript = await YoutubeTranscript.fetchTranscript(url)

  for (let i = 0; i < transcript.length; i++) {
    text += transcript[i].text + " "
  }
  res.status(200).send(text)
};

app.get(`/transcript/:id`, getTranscript)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
