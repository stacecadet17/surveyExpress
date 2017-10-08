module.exports = function(app){


  app.get('/', function(req, res){
    res.render('index');
  })

  app.post('/new', function(req, res){
    console.log(req.body);
    res.render('result', {data: req.body});
  })
}
