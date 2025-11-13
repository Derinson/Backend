const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Email inválido']
  },
  phone: {
    type: String,
    match: [/^\d{10}$/, 'Teléfono debe tener 10 dígitos']
  },
  role: {
    type: String,
    enum: ['admin', 'usuario'],
    default: 'usuario'
  },
  status: {
    type: String,
    enum: ['activo', 'inactivo'],
    default: 'activo'
  },
  birthDate: {
    type: Date
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
