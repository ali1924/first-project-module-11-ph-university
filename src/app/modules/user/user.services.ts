import { TStudent } from "../students/student.interface"
import { Student } from "../students/student.model"

const createStudentIntoDB = async (studentData: TStudent) => {
  if (await Student.isUserExists(studentData.id)) {
    throw new Error('User already exists!')
  }
  const result = await Student.create(studentData)
  return result
}

export const UserServices = {
  createStudentIntoDB,
}
