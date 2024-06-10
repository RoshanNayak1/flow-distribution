const express = require('express');
const bodyParser = require('body-parser');
const distributionRoutes = require('./routes/distributionRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/api',distributionRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
