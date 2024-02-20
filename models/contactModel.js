const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const contactSchema = moongose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
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