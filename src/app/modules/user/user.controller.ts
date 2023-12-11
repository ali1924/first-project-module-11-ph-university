import { UserServices } from "./user.services"

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body
    //   const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await UserServices.createStudentIntoDB(studentData)

    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    })
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    })
  }
}

export const UserControllers = {
  createStudent,
}