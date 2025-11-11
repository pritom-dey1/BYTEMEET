import express from 'express';
import { ENV } from './Config/Gobal.js';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(ENV.PORT, () => {
    console.log('Example app listening on port 3000!')
})