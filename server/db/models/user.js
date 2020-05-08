const mongoose = require('mongoose');
const crypto = require('crypto');
const _ = require('lodash');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  lists: Array,
  isAdmin: { type: Boolean, default: false }
})

userSchema.static('encryptPassword', function (plainText, salt) {
  const hash = crypto.createHash('sha1')
  hash.update(plainText)
  hash.update(salt)
  return hash.digest('hex')
})

userSchema.methods.correctPassword = function (attempted) {
  return (
    userSchema.statics.encryptPassword(attempted, this.salt) === this.password
  )
}

userSchema.methods.sanitize = function () {
  return _.omit(this.toJSON(), ['password', 'salt'])
}

userSchema.static('generateSalt', function () {
  return crypto.randomBytes(16).toString('base64')
})

function setSaltAndPassword(next) {
  if (this.isModified('password')) {
    this.salt = userSchema.statics.generateSalt()
    this.password = userSchema.statics.encryptPassword(this.password, this.salt)
  }
  next()
}

userSchema.pre('save', setSaltAndPassword)

module.exports = mongoose.model('users', userSchema);
