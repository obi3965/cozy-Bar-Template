
module.exports = (app) => {

    
    app.get('/', function(req,res){
       res.render('home.ejs',{
          "title":"home"
       })
    })


    
    app.get('/events', function(req,res, next){
       res.render('events.ejs',{
          "title":"events",
          
          
       })
 
       
    })
    
    app.get('/quiz', function(req, res, next){
       res.render('quiz.ejs',{
          "title":"quiz"
       })
    })
    
    
    app.get('/contact', function(req, res, next){
       res.render('contact.ejs',{
          "title":"contact"
       })
    })
 

    
        
    // app.get('/', (req, res, next) => {
    //    let now = new Date('2019-01-14 07:00:14');
    //    console.log(app.locals.dateAndTime.format(now, 'h:mm A | MMMM DD'));
    // });
 
 };