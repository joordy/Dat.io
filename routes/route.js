const express = require('express');
const router = express.Router();
const mongo = require('mongodb');
require('dotenv').config();

// Database calling
let db = null;
let usersCollection = null;
let url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_URL}${process.env.DB_END}`;

mongo.MongoClient.connect(url, { useUnifiedTopology: true }, function(
    err,
    client
) {
    if (err) {
        throw err;
    } else if (client) {
        console.log('Connected to database');
    }
    db = client.db(process.env.DB_NAME);
    usersCollection = db.collection('users');
});

// Routing
router.get('/', signIn); // Rowan, eerste pagina (index)
router.get('registration', registration); // Rowan
router.post('registration', createAccount); // Rowan
router.post('/', logIn); // Rowan
router.get('/profile', profileOfMe); // Rowan
router.post('/profile', postProfile); // Rowan
router.get('/home', home); // Jordy
router.get('/currentUser', showUser); // Jordy
router.post('/match', match); // Jordy
router.get('/matchlist', matchList); // Jordy
router.get('/filter', filter); // Veerle
router.post('/home', postFilter); // Veerle
router.get('/*', error); // Veerle

function deleteYourself(remove_u) {
    // To remove yourself from match page
    let yourSelf = usersCollection.find({ _id: '5e70aa4227f0bb83c16adf21' });
    let index = remove_u.findIndex(p => p.id === yourSelf);
    completeCollection = remove_u;
    return completeCollection;
}

// Routing functions
async function signIn(req, res, next) {
    // Rowan
    try {
        res.render('index.ejs');
    } catch (err) {
        console.log(err);
    }
}

async function registration(req, res, next) {
    // Rowan
    try {
        // code
    } catch (err) {
        console.log(err);
    }
}

async function createAccount(req, res, next) {
    // Rowan
    try {
        // code
    } catch (err) {
        console.log(err);
    }
}

async function logIn(req, res, next) {
    // Rowan
    try {
        // code
        // post gegevens signin, res.redirect('/home')
    } catch (err) {
        console.log(err);
    }
}

async function profileOfMe(req, res, next) {
    // Rowan
    try {
        // code
    } catch (err) {
        console.log(err);
    }
}

async function postProfile(req, res, next) {
    // Rowan
    try {
        // code
    } catch (err) {
        console.log(err);
    }
}

async function home(req, res, next) {
    // Routes function home, graps every user with 'seen: false' and shows them on page.
    try {
        let allUsers = await usersCollection.find({ seen: false }).toArray();
        res.render('home.ejs', { users: allUsers });
    } catch (err) {
        console.log(err);
    }
}

async function showUser(req, res, next) {
    try {
        res.render('currentUser.ejs');
    } catch (err) {
        console.log(err);
    }
}

async function match(req, res, next) {
    // res.render('match.ejs');
    try {
        let users = await usersCollection.find({ seen: false }).toArray();
        let matchedUser = deleteYourself(users);
        let x = completeCollection.length - 1;

        if (req.body.like) {
            usersCollection.updateOne({ _id: completeCollection[x]._id }, { $set: { match: true, seen: true } });
            console.log(
                `you have a like with ${completeCollection[x].firstName}, and the ID is ${completeCollection[x]._id}`
            );
            res.render('match.ejs', { users: matchedUser }); // data uit database halen en printen onder noemer 'users' in EJS templates
        } else if (req.body.dislike) {
            usersCollection.updateOne({ _id: completeCollection[x]._id }, { $set: { match: false, seen: true } });
            res.redirect('/');
        }
    } catch (err) {
        console.log(err);
    }
}

async function matchList(req, res, next) {
    // Route match overview, graps every user with 'match: true' and will be displayed on overview page.
    try {
        let matches = await usersCollection.find({ match: true }).toArray();
        res.render('matchlist.ejs', { users: matches });
    } catch (err) {
        console.log(err);
    }
}

async function filter(req, res, next) {
    // veerle
    try {
        res.render('filter.ejs');
    } catch (err) {
        console.log(err);
    }
}

async function postFilter(req, res, next) {
    // veerle
    try {} catch (err) {
        console.log(err);
    }
}

async function error(req, res, next) {
    // Veerle of Jordy
    try {
        res.render('404.ejs');
    } catch (err) {
        console.log(err);
    }
}

module.exports = router;