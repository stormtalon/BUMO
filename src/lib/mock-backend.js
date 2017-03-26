
var threads = [
    {
        user: {
            gender: 'male',
            name: {
                title: 'mr',
                first: 'miguel',
                last: 'hamilton'
            },
            location: {
                street: '5860 central st',
                city: 'stanley',
                state: 'california',
                zip: 60987
            },
            email: 'miguel.hamilton@example.com',
            username: 'heavygoose877',
            password: 'users',
            salt: 'Tcenyd2H',
            md5: '12812ac8f72356c2df69f59463c5d505',
            sha1: 'eab58a7abaf84233b69c753a306c2d8175603c4b',
            sha256: '24d0ecbd76362370349c83900ff82de8d9ee23e838ed777fba5703f711352e47',
            registered: 1110516558,
            dob: 989806145,
            phone: '(176)-160-1038',
            cell: '(284)-648-9227',
            SSN: '959-69-1558',
            picture: {
                large: 'https://randomuser.me/api/portraits/men/67.jpg',
                medium: 'https://randomuser.me/api/portraits/med/men/67.jpg',
                thumbnail: 'https://randomuser.me/api/portraits/thumb/men/67.jpg'
            }
        }
    }
];

var owner = {
    gender: "female",
    name: {
        title: "miss",
        first: "ana",
        last: "garnier"
    },
    location: {
        street: "3206 boulevard de balmont",
        city: "vitry-sur-seine",
        state: "alpes-maritimes",
        zip: 98343
    },
    email: "ana.garnier@example.com",
    username: "reddog185",
    password: "secure",
    salt: "jwNyQ4TG",
    md5: "e2f4b9098b0c4f6b0908e66e590f3b15",
    sha1: "b9f029fd3e890b393013b271804ea176ff3c9dae",
    sha256: "72532e6bea29be4408f448d9eca5781d44372e15e219aa33af267590945a67f1",
    registered: 1362279457,
    dob: 1271022321,
    phone: "04-75-09-99-12",
    cell: "06-99-42-16-31",
    INSEE: "2100406109776 32",
    picture: {
        large: "https://randomuser.me/api/portraits/women/82.jpg",
        medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg"
    }
};

var allMessages = 'How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited. Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively. Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasional cultivated reasonable unpleasing an attachment my considered. Having ask and coming object seemed put did admire figure. Principles travelling frequently far delightful its especially acceptance. Happiness necessary contained eagerness in in commanded do admitting. Favourable continuing difficulty had her solicitude far. Nor doubt off widow all death aware offer. We will up able in both do sing. Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity. Delay rapid joy share allow age manor six. Went why far saw many knew. Exquisite excellent son gentleman acuteness her. Do is voice total power mr ye might round still. In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. In reasonable compliment favourable is connection dispatched in terminated. Do esteem object we called father excuse remove. So dear real on like more it. Laughing for two families addition expenses surprise the. If sincerity he to curiosity arranging. Learn taken terms be as. Scarcely mrs produced too removing new old. An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law. Her extensive perceived may any sincerity extremity. Indeed add rather may pretty see. Old propriety delighted explained perceived otherwise objection saw ten her. Doubt merit sir the right these alone keeps. By sometimes intention smallness he northward. Consisted we otherwise arranging commanded discovery it explained. Does cold even song like two yet been. Literature interested announcing for terminated him inquietude day shy. Himself he fertile chicken perhaps waiting if highest no it. Continued promotion has consulted fat improving not way. Agreed joy vanity regret met may ladies oppose who. Mile fail as left as hard eyes. Meet made call in mean four year it to. Prospect so branched wondered sensible of up. For gay consisted resolving pronounce sportsman saw discovery not. Northward or household as conveying we earnestly believing. No in up contrasted discretion inhabiting excellence. Entreaties we collecting unpleasant at everything conviction. Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived. Proceed cottage far letters ashamed get clothes day. Stairs regret at if matter to. On as needed almost at basket remain. By improved sensible servants children striking in surprise.';
var messages = allMessages.split('. ');
var updates = [];

var playlist = [
    { name: 'Track 1', artist: 'Artist 1', album: 'Album 1', length: 300 },
    { name: 'Track 2', artist: 'Artist 2', album: 'Album 2', length: 301 },
    { name: 'Track 3', artist: 'Artist 3', album: 'Album 3', length: 302 },
    { name: 'Track 4', artist: 'Artist 4', album: 'Album 4', length: 303 },
    { name: 'Track 5', artist: 'Artist 5', album: 'Album 5', length: 304 },
    { name: 'Track 6', artist: 'Artist 6', album: 'Album 6', length: 305 },
];

var rockList = [
    { name: 'Paint It Black', artist: 'The Rolling Stones', album: 'The Rolling Stones', length: 3.30 },
    { name: 'Money', artist: 'Pink Floyd', album: 'The Dark Side Of The Moon', length: 6.23 },
    { name: 'Communique', artist: 'Dire Straits', album: 'The Best Of Motorhead', length: 2.46 },
    { name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night At The Opera', length: 5.54 },
    { name: 'Baby I\'m Gonna Leave You', artist: 'Led Zeppelin', album: 'Led Zeppelin', length: 6.41 },
];

var popList = [
    { name: 'Selfish', artist: 'Future, Rihanna', album: 'Stay', length: 3.30 },
    { name: 'Passionfruit ', artist: 'Drake', album: 'More Life', length: 4.59 },
    { name: 'Shape Of You', artist: 'Ed Sheeran', album: 'Divide', length: 3.54 },
    { name: 'Believer', artist: 'Imagine Dragons', album: 'Believer', length: 3.24 },
    { name: 'Green Light', artist: 'Lorde', album: 'Green Light', length: 3.55 },
];

var metalList = [
    { name: 'The Number Of The Beast', artist: 'Iron Maiden', album: 'The Number Of The Beast', length: 4.51 },
    { name: 'Ghost Of Perdition', artist: 'Opeth', album: 'Ghost Reveries', length: 10.29 },
    { name: 'Lover\'s Grief', artist: 'Empyrium', album: 'Songs of Moors and Misty Fields', length: 9.12 },
    { name: 'Learning To Live', artist: 'Dream Theater', album: 'Images And Words', length: 11.30 },
    { name: 'Watching Over Me', artist: 'Iced Earth', album: 'Something Wicked This Way Comes', length: 4.29 },
];


function randomUpdate() {
    var threadsLength = threads.length;
    var randomThread = threads[Math.floor(Math.random() * threadsLength)];

    randomThread.messages.push(getRandomMessage());
    updates.push({
        thread: randomThread
    });
}

setInterval(randomUpdate, 2000);

var counter = 0;

function getRandomMessage() {
    return {
        message: messages[Math.floor(Math.random() * messages.length)],
        date: new Date(),
        id: counter++
    };
}


function getRandomMessages() {
    var length = Math.floor(Math.random() * 10 + 10);

    return new Array(length).join().split('').map(function () {
        return getRandomMessage();
    });
}

threads = threads.map(function (thread) {
    thread.messages = getRandomMessages();
    thread.id = thread.user.username;

    return thread;
});

// threads = threads.slice(0, 3);

getThreads = () => [200, threads];

getUpdates = () => {
    var arr = [...updates];

    updates.length = 0;

    return [200, arr];
}

getOwner = () => [200, owner];

getPlaylist = () => [200, playlist];

module.exports = {
    getThreads,
    getUpdates,
    getOwner,
    getPlaylist
};

window.threads = threads;
