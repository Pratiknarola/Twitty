const express = require('express')
const app = express()
const axios = require('axios')
const port = 3000


app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const count = req.query.count;

    const url = "https://api.twitter.com/1.1/search/tweets.json";
    axios.get(url, {
        params: {
            q: query,
            count: count
        },
        headers: {
            "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAADlgGgEAAAAA8zMDsANhaqfLxVaX5k878G6nm%2BA%3DjAmddkc46OQMISjUp8qy2NueSHNYkyard1yXRiWZtqi4yL7Uxg"
        }
    }).then((response) => {
        res.status(200).send(response.data);
    }).catch((error) => {
        console.log(error);
    })

})

app.listen(port, () => console.log(`Twitter App listening on port ${port}!`))