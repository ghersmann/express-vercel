const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");

require('dotenv').config();

const port = process.env.PORT || 1000;
const mongoURI = process.env.MONGODB_URI;

//app
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//mongo URI
const client = new MongoClient(mongoURI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const run = async () => {
    try{
        await client.connect();
    
         await client.db("admin").command({ ping: 1 });
        console.log(
          "Pinged your deployment. You successfully connected to MongoDB!"
        );
    }
    finally{
    
    }
    }
    
    run().catch(error => console.log)

app.get('/', (req, res) => {
  res.send('Hello from Express-vercel!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});