var express = require('express');
var router = express.Router();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'f2798121f9fb48e9b882b1d6aecd346c',
    clientSecret: '3c8849701f8e4e2ab43cf0f1a6603bd5'
});

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then(
    function (data) {
        console.log('The access token expires in ' + data.body.access_token);
        console.log('The access token is ' + data.body.access_token);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body.access_token);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message
        );
    }
);

router.get('/', function (req, res) {
    spotifyApi.getAlbums(['0Rkv5iqjF2uenfL0OVB8hg', '7wgrW5XyZdtk0K8PkW5A7h',
            '3Ho9myCfRqygtmG3a073Zx', '715BUKTdGdNjePHLhRltCT',
            '2khzKvw27vsWmb8xgnqxKb', '7sPtZdZmSgXHPheagFLje9',
            '1o1ElG9Z0MKQ7IDHhua1fK', '62afs3y06fy6gZqMUASF9I', '3wvpIkfl4oOgZLMaQBWadf'
        ],
        function (err, data) {
            if (err) throw err;
            var firstAlbumImage = data.body.albums[0].images[0].url;
            var secondAlbumImage = data.body.albums[1].images[0].url;
            var thirdAlbumImage = data.body.albums[2].images[0].url;
            var fourthAlbumImage = data.body.albums[3].images[0].url;
            var fifthAlbumImage = data.body.albums[4].images[0].url;
            var sixthAlbumImage = data.body.albums[5].images[0].url;
            var seventhAlbumImage = data.body.albums[6].images[0].url;
            var eigthAlbumImage = data.body.albums[7].images[0].url;
            var ninthAlbumImage = data.body.albums[8].images[0].url;
            var firstAlbumName = data.body.albums[0].name;
            var secondAlbumName = data.body.albums[1].name;
            var thirdAlbumName = data.body.albums[2].name;
            var fourthAlbumName = data.body.albums[3].name;
            var fifthAlbumName = data.body.albums[4].name;
            var sixthAlbumName = data.body.albums[5].name;
            var seventhAlbumName = data.body.albums[6].name;
            var eigthAlbumName = data.body.albums[7].name;
            var ninthAlbumName = data.body.albums[8].name;

            // get tracks in first album
            spotifyApi.getAlbumTracks('0Rkv5iqjF2uenfL0OVB8hg', {
                limit: 10,
                offset: 10
            }, function (err, data) {
                if (err) throw err;
                var resultOne = data.body.items[0];
                // Get tracks in second album
                spotifyApi.getAlbumTracks('7wgrW5XyZdtk0K8PkW5A7h', {
                        limit: 1,
                        offset: 1
                    }, function (err, data) {
                    if (err) throw err;
                    var resultTwo = data.body.items[0];
                    // Get tracks in third album
                    spotifyApi.getAlbumTracks('3Ho9myCfRqygtmG3a073Zx', {
                            limit: 2,
                            offset: 1
                        }, function (err, data) {
                            if (err) throw err;
                            var resultThree = data.body.items[0];
                            // Get tracks in fourth album
                            spotifyApi.getAlbumTracks('715BUKTdGdNjePHLhRltCT', {
                                limit: 1,
                                offset: 1
                                }, function (err, data) {
                                    if (err) throw err;
                                    var resultFour = data.body.items[0];
                                    // Get tracks in fifth album
                                     spotifyApi.getAlbumTracks('2khzKvw27vsWmb8xgnqxKb', {
                                                 limit: 1,
                                                 offset: 1
                                             }, function (err, data) {
                                                 if (err) throw err;
                                                 var resultFive = data.body.items[0];
                                                 // Get tracks in sixth album
                                                 spotifyApi.getAlbumTracks('7sPtZdZmSgXHPheagFLje9', {
                                                     limit: 1,
                                                     offset: 1
                                                 }, function (err, data) {
                                                     if (err) throw err;
                                                     var resultSix = data.body.items[0];
                                                     // Get tracks in Seventh album
                                                     spotifyApi.getAlbumTracks('1o1ElG9Z0MKQ7IDHhua1fK', {
                                                         limit: 2,
                                                         offset: 1
                                                     }, function (err, data) {
                                                         if (err) throw err;
                                                         var resultSeven = data.body.items[1];
                                                         // Get tracks in eigth album
                                                         spotifyApi.getAlbumTracks('62afs3y06fy6gZqMUASF9I', {
                                                             limit: 1,
                                                             offset: 1
                                                         }, function (err, data) {
                                                             if (err) throw err;
                                                             var resultEigth = data.body.items[0];
                                                             // Get tracks in ninth album
                                                             spotifyApi.getAlbumTracks('3wvpIkfl4oOgZLMaQBWadf', {
                                                                 limit: 1,
                                                                 offset: 1
                                                             }, function (err, data) {
                                                                 if (err) throw err;
                                                                 var resultNine = data.body.items[0];
                                                                  res.render('index', {
                                                                      title: 'Musify',
                                                                      style: 'index.css',
                                                                      script: 'addToPlay.js',
                                                                      firstAlbumImage: firstAlbumImage,
                                                                      secondAlbumImage: secondAlbumImage,
                                                                      thirdAlbumImage: thirdAlbumImage,
                                                                      fourthAlbumImage: fourthAlbumImage,
                                                                      fifthAlbumImage: fifthAlbumImage,
                                                                      sixthAlbumImage: sixthAlbumImage,
                                                                      seventhAlbumImage: seventhAlbumImage,
                                                                      eigthAlbumImage: eigthAlbumImage,
                                                                      ninthAlbumImage: ninthAlbumImage,
                                                                      firstAlbumName: firstAlbumName,
                                                                      secondAlbumName: secondAlbumName,
                                                                      thirdAlbumName: thirdAlbumName,
                                                                      fourthAlbumName: fourthAlbumName,
                                                                      fifthAlbumName: fifthAlbumName,
                                                                      sixthAlbumName: sixthAlbumName,
                                                                      seventhAlbumName: seventhAlbumName,
                                                                      eigthAlbumName: eigthAlbumName,
                                                                      ninthAlbumName: ninthAlbumName,
                                                                      audioOne: resultOne,
                                                                      audioTwo: resultTwo,
                                                                      audioThree: resultThree,
                                                                      audioFour: resultFour,
                                                                      audioFive: resultFive,
                                                                      audioSix: resultSix,
                                                                      audioSeven: resultSeven,
                                                                      audioEigth: resultEigth,
                                                                      audioNine: resultNine,
                                                                      user: req.session.user,
                                                                      username: req.session.username
                                                                  });


                                                             });


                                                         });


                                                     });


                                                 });
                                                
                                                
                                                });
                                    

                                   
                            });
                        });
                    });
            });
    });
});

router.get('/search/:data', function (req, res) {
    console.log('search word' + req.params.data);
    spotifyApi.searchTracks(req.params.data)
        .then(function (data) {
            res.send(data.body.tracks.items);
        }, function (err) {
            console.error(err);
        });
});

module.exports = router;