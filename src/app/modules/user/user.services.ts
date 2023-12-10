const createStudentIntoDB = async (studentData: TStudent) => {
    // //1. call model.create function and pass student
    // const result = await StudentModel.create(student)
    //built-in static method
    // //   2. return result
    // return result
    //static method
  
    if (await StudentModel.isUserExists(studentData.id)) {
      throw new Error('User already exists')
    }
    const result = await StudentModel.create(studentData)
    return result
    /*
    // instance method
    const student = new StudentModel(studentData)
    
    if (await student.isUserExists(studentData.id)) {
      throw new Error('User already exists')
    }
    const result = await student.save()
  
    return result */
  }