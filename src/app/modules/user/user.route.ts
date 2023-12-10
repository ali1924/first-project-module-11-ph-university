import express from 'express'

//will call controller function
const router = express.Router()

//create student
router.post('/create-student', UserControllers.createStudent)


export const UserRoutes = router
