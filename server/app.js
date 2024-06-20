require('dotenv').config();
const express = require('express');
const removeHeaders = require('./middleware/removeHeaders');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
// const PORT = process.env.PORT || 3000;
const PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(removeHeaders);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

const indexRouter = require('./routes/index.routes');

app.use('/api', indexRouter);

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
