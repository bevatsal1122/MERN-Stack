import express from 'express';
import { PORT, DB } from './config';
import routes from './routes';
import errorHandler from './middlewares/errorHandler';
import mongoose from 'mongoose';
import path from 'path';
const app = express();
global.appRoot = path.resolve(__dirname);

app.use(express.json());
app.use('/api', routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Database Connection Error: "));
db.once("open", function () {
  console.log("Database Connected Successfully");
});

// Include errorHandler after including router (All Routes)
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`App Running at Port ${PORT}`);
})
