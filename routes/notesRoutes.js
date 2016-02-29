var notesController = require('../controllers/notesController');

var notesRoutes = {
    loadRoutes: function (app) {
        app.get('/notes', notesController.getAll);        
    }
};

module.exports = notesRoutes;