var express = require('express');
var router = express.Router();
const Jimp = require('jimp');

const imgModel = require('../models/img');
const imgTextModel = require('../models/imgText');
const chatModel = require('../models/chat');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/index.html');
  // res.sendFile('/www/wwwroot/1.14.194.153/index.html');
});


router.get('/chat/:id',function(req,res){
  chatModel.find({id:req.params['id']}).exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      console.log('ii',i?.list);
      res.send(i);
    } 
  })
})

router.post('/img/add', function (req, res, next) {
  reqdata = req.body;
  reqimg = reqdata['img']
  requser = reqdata['user']?reqdata['user']:'undefined'
  imgid = (new Date()).getTime() + '' + requser + Math.random().toString(36).slice(-8)

  console.log(reqdata);
  let img = new imgModel({
    id: imgid,
    content: reqimg,
    user: requser
  });
  // imgModel.create(img);
  img.save().then(doc => {
    console.log(doc);
  });
  res.json({ 'msg': 'ok', 'data': { 'img': reqimg, 'id': imgid, 'user': requser } });
});

router.get('/img/all', function (req, res, next) {
  i = imgModel.find().exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      console.log('ii',i?.length);
      res.send(i);
    } 
  })
})

router.get('/img/p/:userId', function (req, res, next){
  i = imgModel.find({user:req.params['userId']}).exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      console.log('ii',i?.length);
      res.send(i);
    } 
  })
})

router.get('/img/id/:id',function(req,res){
  imgModel.find({id:req.params['id']}).exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      console.log('ok',i[0]?.id);
      res.send(i[0]);
    } 
  })
})

router.delete('/img/id/:id',function(req,res){
  imgModel.find({id:req.params['id']}).exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      i[0].remove();
      res.send(i[0]);
    } 
  })
})

router.post('/img/add/text',function (req, res, next){
  console.log(req.body);
  reqdata = req.body;
  reqtext = reqdata['text'];
  reqx = Number(reqdata['x']);
  reqy = Number(reqdata['y']);
  reqimgid = reqdata['id'];  
  i = imgModel.find({id:reqimgid}).exec(function(err, i) { 
    if (err) console.log('err:', err); 
    else {
      console.log('ii',i[0]?.length);
      let imgText = new imgTextModel({
        id: reqimgid,
        x: reqx,
        y: reqy,
        text: reqtext
      })
      imgText.save(doc=>{console.log(doc?.length);});
      imgTemp = i[0]['content'];
      imghead = imgTemp.substr(0,1+imgTemp.indexOf(','))
      p = Buffer.from(i[0]['content'].replace(/^data:image\/\w+;base64,/, ""), 'base64');
      Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font=>{
        Jimp.read(p).then(pic=>{
            pic.print(font,reqx,reqy,reqtext).getBuffer(Jimp.MIME_PNG, function(err, buf){
                if(err)console.log('buf err',err);
                let img = buf.toString('base64');
                console.log(img?.length);
                i[0]['content']=imghead + img;
                i[0].save();
                res.send({'msg':'ok','data':'data:image/png;base64,'+img});
            })
        })
    })
    } 
  }) 
})

module.exports = router;


