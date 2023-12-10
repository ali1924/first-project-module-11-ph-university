const createStudent = async (req: Request, res: Response) => {
  try {
    //1. get data from client body
    const { password, student: studentData } = req.body
    // 2. parse data into validation
    // const parseData = studentValidationSchema.parse(studentData)
    //   2. will call service function to send this data in DB
    const result = await StudentServices.createStudentIntoDB(
      password,
      studentData,
    )
    console.log(result)
    //3. res send
    res.status(200).send({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    })
  }
}
