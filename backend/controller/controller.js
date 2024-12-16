const db = require ("../model/index")

exports.findAll = (req, res) => {
    console.log('findAll endpoint called'); 
    db.appointment.findAll()
      .then(appointments => {
        res.json(appointments);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'An error occurred while fetching data' });
      });
  };
 
  