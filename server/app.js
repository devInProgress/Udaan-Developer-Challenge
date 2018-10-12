import express from 'express';

const app = express();
const PORT = process.env.PORT || 9090;

require('./middlewares')(app);
require('./dbAdapters/dbConnection')();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));