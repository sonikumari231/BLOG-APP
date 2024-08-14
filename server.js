const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');


//env config
dotenv.config();
//routes import
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');
//mongodb connect
connectDB();
//rest object
const app = express();
//middleware
const corsOptions = {
    origin: 'https://your-netlify-site.netlify.app', // replace with your Netlify site URL
    optionsSuccessStatus: 200
  };
  
  // middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use('/api/v1/user',userRoutes);
app.use('/api/v1/blog',blogRoutes);

//PORT
const PORT = process.env.PORT || 8080;
//listen
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode port no ${PORT}`.bgCyan.white);
});