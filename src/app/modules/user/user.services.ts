import config from '../../config'
import { TStudent } from '../students/student.interface'
import { Student } from '../students/student.model'
import { TNewUser, TUser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // if (await Student.isUserExists(studentData.id)) {
  //   throw new Error('User already exists!')
  // }
  // 1. Create user object
  const userData: Partial<TUser> = {}
  // 2. set password
  userData.password = password || (config.default_password as string)
  // 3. set role
  userData.role = 'student'
  // 4. set id manually generated
  userData.id = '203010000001'

  const newUser = await User.create(userData)
  console.log('NEW USER:', newUser)

  if (Object.keys(newUser).length) {
    //set id,_id as user
    studentData.id = newUser.id
    studentData.user = newUser._id //reference _id

    // create student
    const newStudent = await Student.create(studentData)
    console.log('NEW STUDENT:', newStudent)
    return newStudent
  }
  // return newUser
}

export const UserServices = {
  createStudentIntoDB,
}
