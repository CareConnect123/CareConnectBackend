import {
  BookMedicine,
  BookedLabtest,
  BookOxygen,
  BookedBlood,
  BookedAppointment,
  OnlineConsultation,
  BookedBeds
} from '../models'
import bookBeds from '../models/bookBeds'

const UserPanel = {
  async getMedsByUser (req, res, next) {
    try {
      const userId = req.user._id

      const mymeds = await BookMedicine.find({ user: userId }).populate(
        'medicine user'
      )
      res.json({ mymeds })
    } catch (error) {
      console.log(error)
    }
  },
  async getLabTestByUser (req, res, next) {
    try {
      const userId = req.user._id

      const mylLabTests = await BookedLabtest.find({ user: userId }).populate(
        'testType user'
      )
      res.json({ mylLabTests })
    } catch (error) {
      console.log(error)
    }
  },
  async getOxygenByUser (req, res, next) {
    try {
      const userId = req.user._id

      const myOxygens = await BookOxygen.find({ user: userId }).populate(
        'center user'
      )
      res.json({ myOxygens })
    } catch (error) {
      console.log(error)
    }
  },
  async getAppointmentByUser (req, res, next) {
    try {
      const userId = req.user._id

      const myAppointments = await BookedAppointment.find({
        user: userId
      }).populate('doctor user')
      res.json({ myAppointments })
    } catch (error) {
      console.log(error)
    }
  },
  async getConsultationByUser (req, res, next) {
    try {
      const userId = req.user._id

      const myConsultations = await OnlineConsultation.find({
        user: userId
      }).populate('doctor user')
      res.json({ myConsultations })
    } catch (error) {
      console.log(error)
    }
  },
  async getBedsByUser (req, res, next) {
    try {
      const userId = req.user._id

      const mybeds = await bookBeds
        .find({
          user: userId
        })
        .populate('hospital user')
      res.json({ mybeds })
    } catch (error) {
      console.log(error)
    }
  },
  async getBloodByUser (req, res, next) {
    try {
      const userId = req.user._id

      const myBloods = await BookedBlood.find({ user: userId }).populate(
        'bloodbank user'
      )
      res.json({ myBloods })
    } catch (error) {
      console.log(error)
    }
  },

  async getall (req, res, next) {
    try {
      const userId = req.user._id

      const mymeds = await BookMedicine.find({ user: userId }).populate(
        'medicine user'
      )

      const mylLabTests = await BookedLabtest.find({ user: userId }).populate(
        'testType user'
      )

      const myOxygens = await BookOxygen.find({ user: userId }).populate(
        'center user'
      )

      const myAppointments = await BookedAppointment.find({
        user: userId
      }).populate('doctor user')

      const myConsultations = await OnlineConsultation.find({
        user: userId
      }).populate('doctor user')

      const mybeds = await bookBeds
        .find({
          user: userId
        })
        .populate('hospital user')

      const myBloods = await BookedBlood.find({ user: userId }).populate(
        'bloodbank user'
      )


      res.json({mymeds, myAppointments, myBloods, myConsultations, myOxygens, mybeds, mylLabTests})
    } catch (error) {
      next(error)
    }
  }
}

export default UserPanel
