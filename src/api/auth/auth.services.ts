import database from "../../loaders/database";
import generateToken from "../../shared/jwt";
import bcrypt from "bcrypt";

// Handle faculty signup
export const handleCreateFaculty = async (
  designation: string,
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<void> => {
  const collection = (await database()).collection("faculties");
  const hashedPassword = await bcrypt.hash(password, 10);
  const faculty = await collection.findOne({ email });
  if (faculty) {
    throw {statusCode: 500, message: "Faculty already exists"};
  }
  await collection.insertOne({
    designation,
    firstname,
    lastname,
    email,
    password: hashedPassword,
    isDeleted: false,
  });
};

// Handle faculty login
export const handleFacultyLogin = async (
  email: string,
  password: string
): Promise<unknown> => {
  const collection = (await database()).collection("faculties");
  const faculty = await collection.findOne({ email });
  if (!faculty) {
    throw new Error("Faculty does not exist");
  }
  const isPasswordValid = await bcrypt.compare(password, faculty.password);
  if (!isPasswordValid) {
    throw new Error("INVALID_PASSWORD");
  }
  return generateToken(email);
};

// Handle student signup
export const handleCreateStudent = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<void> => {
  const collection = (await database()).collection("students");
  const hashedPassword = await bcrypt.hash(password, 10);
  const student = await collection.findOne({ email });
  if (student) {
    throw new Error("Student already exists");
  }
  await collection.insertOne({
    firstname,
    lastname,
    email,
    password: hashedPassword,
    isDeleted: false,
  });
};

// Handle student login
export const handleStudentLogin = async (
  email: string,
  password: string
): Promise<unknown> => {
  const collection = (await database()).collection("students");
  const student = await collection.findOne({ email });
  if (!student) {
    throw new Error("Student does not exist");
  }
  const isPasswordValid = await bcrypt.compare(password, student.password);
  if (!isPasswordValid) {
    throw new Error("INVALID_PASSWORD");
  }
  return generateToken(email);
};
