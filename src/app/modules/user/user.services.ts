import config from '../../config'
import { TStudent } from '../students/student.interface'
import { Student } from '../students/student.model'
import { TNewUser } from './user.interface'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  // 1. Create user object
  const user: TNewUser = {}
  // 2. set password
  user.password = password || (config.default_password as string)
  // 3. set role
  user.role = 'student'
  // 4. set id manually generated
  user.id = '203010000001'

  const result = await Student.create(user)

  if (Object.keys(result).length) {
    //set id,_id as user
    studentData.id = result.id
    studentData.user = result._id
  }
  return result
}

export const UserServices = {
  createStudentIntoDB,
}
