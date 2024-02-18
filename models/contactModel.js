const moongose = require('mongoose');

const contactSchema = moongose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required']
  }
},
{
  timestamps: true
});

module.exports = moongose.model('Contact', contactSchema);