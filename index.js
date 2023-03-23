const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const fs = require('fs');
app.use('/static', express.static('./static'));

app.listen(3000, () => {
    console.log("Server listening on port=>> localhost:3000");
});

app.get('/', (req, res) => {
    res.sendFile('inde.html', { root: './' });
})

app.get('/termofservice', (req, res) => {
    res.sendFile('termofservice.html', { root: './' });
})

app.get('/privacy', (req, res) => {
    res.sendFile('privacy&policy.html', { root: './' });
})

app.get('/contact', (req, res) => {
    res.sendFile('contactus.html', { root: './' });
})

app.get('/blog', (req, res) => {
    res.sendFile('faq.html', { root: './' });
       
})




app.get('/download', async(req, res) => {
//res.setHeader('Content-Type', 'application/json'); 
    var url = req.query.username;
   // res.send({title:77653});
   // console.log(req.query.username);
    
    var videoID = ytdl.getURLVideoID(url);
 //  console.log(ytdl.videoInfo);
    
  //  let info = ytdl.getInfo(videoID);       
    
    
   // let format = ytdl.chooseFormat(info.formats, { quality: '134' });
    
    //console.log('Format found!'+ format);
     
     const info = await ytdl.getInfo(req.query.username);
    //console.log(info.formats[4]);
    //console.log(info.formats[13].url);
    //console.log(info.formats[13].qualityLabel);
    
   // console.log(info.formats.length);
    
   // let qu = info.formats[13].quality;
     
   //  console.log(info.formats);
     
    let videoTitle = info.videoDetails.title;
    //console.log(info.player_response.videoDetails.thumbnail.thumbnails);
    
    let thumb = info.player_response.videoDetails.thumbnail.thumbnails;
    
  //  const video = ytdl(url,{ quality: '144p', format: 'mp4' }); 

//video.pipe(fs.createWriteStream(Output))


    let items = info.formats;
    
    /*
    let data = {
      "messages": [{
           "msgFrom": "13223821242",
           "msgBody": "Hi there"
       }, {
          "msgFrom": "Bill",
          "msgBody": "Hello!"
       }]
 };
 
 let ar=[];
 
    data.messages.forEach((obj, i) => { 
    ar.push(obj.msgBody);
    console.log("msgFrom", obj.msgFrom); console.log("msgBody", obj.msgBody); });
    
    */
    
    
    res.json({"items":items, "thumb":thumb, "videoTitle": videoTitle});
    
    
    /*
    items.forEach(function (item) { 

            console.log(item.quality); 

        });

*/
    
    
    //res.header("Content-Disposition", 'attachment; filename="Vide.mp4');
    
   // ytdl(url, {format: 'mp4'}).pipe(res);
   // video.pipe(res);
    //ytdl(url).pipe(fs.createWriteStream('video.mp4'));
    
   // ytdl(url, { filter: (format) => format.container === 'mp4' }) .pipe(fs.createWriteStream('video.mp4'), res);
    
    
});