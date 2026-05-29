const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// KEEP SERVER ALIVE
app.get("/", (req, res) => {
  res.send("Bot is running successfully");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/*
====================================
MTUwNjQ2MDIxMjI1MTMzMjYzNg.G8n71z.3icpf74sBp1LjkbOTX46Z8Z7jKQDKkTUs44mRI
====================================
*/
