var notesController = {
  getAll: function(req,res,next){
      var notes = [{description:'this is a new note'}];
      res.status(200).send(notes);
  }  
};

module.exports = notesController;