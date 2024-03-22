var express = require('express');
var router = express.Router();
var singersData = [
  { 
    name: 'Adele', 
    genre: 'Pop', 
    albums: 3, 
    slug: 'adele', 
    description: 'Adele is a British singer-songwriter known for her powerful vocals and emotional ballads.', 
    country: 'United Kingdom', 
    albumNames: ['19', '21', '25'], 
    activeYears: '2006-present', 
    awardsWon: 15, 
    twitterHandle: '@AdeleOfficial', 
    website: 'http://www.adele.com/'
  },
  { 
    name: 'Ed Sheeran', 
    genre: 'Pop', 
    albums: 4, 
    slug: 'ed-sheeran', 
    description: 'Ed Sheeran is an English singer-songwriter known for his heartfelt lyrics and acoustic sound.', 
    country: 'United Kingdom', 
    albumNames: ['+', 'x', '÷', 'No.6 Collaborations Project'], 
    activeYears: '2004-present', 
    awardsWon: 18, 
    twitterHandle: '@edsheeran', 
    website: 'https://www.edsheeran.com/'
  },
  { 
    name: 'Beyoncé', 
    genre: 'R&B', 
    albums: 6, 
    slug: 'beyonce', 
    description: 'Beyoncé is an American singer, songwriter, and actress known for her powerful voice and dynamic performances.', 
    country: 'United States', 
    albumNames: ['Dangerously in Love', 'B\'Day', 'I Am... Sasha Fierce', '4', 'Beyoncé', 'Lemonade'], 
    activeYears: '1997-present', 
    awardsWon: 290, 
    twitterHandle: '@Beyonce', 
    website: 'https://www.beyonce.com/'
  },
  { 
    name: 'Taylor Swift', 
    genre: 'Pop', 
    albums: 9, 
    slug: 'taylor-swift', 
    description: 'Taylor Swift is an American singer-songwriter known for her narrative songwriting and catchy pop tunes.', 
    country: 'United States', 
    albumNames: ['Taylor Swift', 'Fearless', 'Speak Now', 'Red', '1989', 'Reputation', 'Lover', 'folklore', 'evermore'], 
    activeYears: '2006-present', 
    awardsWon: 442, 
    twitterHandle: '@taylorswift13', 
    website: 'https://www.taylorswift.com/'
  },
  { 
    name: 'Bruno Mars', 
    genre: 'Pop', 
    albums: 3, 
    slug: 'bruno-mars', 
    description: 'Bruno Mars is an American singer, songwriter, and record producer known for his versatile musical style and energetic performances.', 
    country: 'United States', 
    albumNames: ['Doo-Wops & Hooligans', 'Unorthodox Jukebox', '24K Magic'], 
    activeYears: '2004-present', 
    awardsWon: 222, 
    twitterHandle: '@BrunoMars', 
    website: 'https://www.brunomars.com/'
  },
  { 
    name: 'Rihanna', 
    genre: 'Pop', 
    albums: 8, 
    slug: 'rihanna', 
    description: 'Rihanna is a Barbadian singer, songwriter, and actress known for her distinctive voice and eclectic musical style.', 
    country: 'Barbados', 
    albumNames: ['Music of the Sun', 'A Girl like Me', 'Good Girl Gone Bad', 'Rated R', 'Loud', 'Talk That Talk', 'Unapologetic', 'Anti'], 
    activeYears: '2003-present', 
    awardsWon: 276, 
    twitterHandle: '@rihanna', 
    website: 'https://www.rihannanow.com/'
  },
  { 
    name: 'Justin Bieber', 
    genre: 'Pop', 
    albums: 5, 
    slug: 'justin-bieber', 
    description: 'Justin Bieber is a Canadian singer-songwriter known for his smooth vocals and catchy pop hits.', 
    country: 'Canada', 
    albumNames: ['My World 2.0', 'Under the Mistletoe', 'Believe', 'Purpose', 'Changes'], 
    activeYears: '2007-present', 
    awardsWon: 231, 
    twitterHandle: '@justinbieber', 
    website: 'https://www.justinbiebermusic.com/'
  },
  { 
    name: 'Katy Perry', 
    genre: 'Pop', 
    albums: 5, 
    slug: 'katy-perry', 
    description: 'Katy Perry is an American singer, songwriter, and television judge known for her energetic performances and catchy pop anthems.', 
    country: 'United States', 
    albumNames: ['Katy Hudson', 'One of the Boys', 'Teenage Dream', 'Prism', 'Witness'], 
    activeYears: '2001-present', 
    awardsWon: 120, 
    twitterHandle: '@katyperry', 
    website: 'https://www.katyperry.com/'
  },
  { 
    name: 'Drake', 
    genre: 'Hip Hop', 
    albums: 6, 
    slug: 'drake', 
    description: 'Drake is a Canadian rapper, singer, and songwriter known for his introspective lyrics and versatile musical style.', 
    country: 'Canada', 
    albumNames: ['Thank Me Later', 'Take Care', 'Nothing Was the Same', 'Views', 'Scorpion', 'Certified Lover Boy'], 
    activeYears: '2001-present', 
    awardsWon: 222, 
    twitterHandle: '@Drake', 
    website: 'https://www.drakeofficial.com/'
  },
  { 
    name: 'Ariana Grande', 
    genre: 'Pop', 
    albums: 6, 
    slug: 'ariana-grande', 
    description: 'Ariana Grande is an American singer, songwriter, and actress known for her powerful vocals and wide vocal range.', 
    country: 'United States', 
    albumNames: ['Yours Truly', 'My Everything', 'Dangerous Woman', 'Sweetener', 'Thank U, Next', 'Positions'], 
    activeYears: '2008-present', 
    awardsWon: 161, 
    twitterHandle: '@ArianaGrande', 
    website: 'https://www.arianagrande.com/'
  }]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home',singers:singersData});
});

router.get('/s/:slug', function(req, res, next) {
  var slug = req.params.slug;
  var singer = singersData.find(function(singer) {
    return singer.slug === slug;
  });
  res.render('singer', { title: singer.name, singer: singer });
});



module.exports = router;