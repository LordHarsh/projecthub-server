import database from "../../loaders/database";

export const handleGetFaculty = async (_id): Promise<unknown> => {
  const collection = (await database()).collection("faculties");
  const faculty = await collection.findOne({ _id });
  if (!faculty) {
    throw new Error("Faculty not found");
  }
  return faculty;
};

export const handleCreateClass = async (
  name: string,
  code: string,
  description: string,
  facultyId: string
): Promise<unknown> => {
  const collection = (await database()).collection("classes");
  const classes = await collection.insertOne({
    name,
    code,
    description,
    facultyId,
    messages: [{
      senderType: "faculty",
      senderId: facultyId,
      message: "Welcome to the class",
      timestamp: new Date().getTime()
    }],
  });
  return classes;
};
