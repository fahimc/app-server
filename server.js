var Server={
  imports:{
    express:require('express')
  },
  _app:null,
  init:function(){
    this._app = express();
    this.setRouting();
  },
  setRouting:function(){
    app.get('/', this.routers.root.bind(this));
  },
  routers:{
    root:function(req,res){
       res.send('hello world');
    }
  }
};

Server.init();