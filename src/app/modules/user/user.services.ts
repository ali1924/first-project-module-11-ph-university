import config from '../../config'
import { TStudent } from '../students/student.interface'
import { TNewUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  //1. create a user object
  const user: TNewUser = {}

  //2. if password is not given,use default password
  user.password = password || (config.default_password as string)
  // 2.set student role
  user.role = 'student'
  //set manually generated id
  user.id = '2030100001'

  //create user
  const result = await User.create(user)

  //create a student
  //object.keys return an array
  if (Object.keys(result).length) {
    //set id, _id as user
    studentData.id = result.id
    studentData.user = result._id
  }
  return result
}

export const UserServices = {
  createStudentIntoDB,
}
