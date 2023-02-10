import { useLoaderData } from "react-router-dom";
import Student from "../components/Student/student";

export default function Students() {
  const students = useLoaderData();

  return (
    <>
      <h1 className="text-center">Students</h1>

      <main className="flex flex-col items-center gap-y-4">
        {students.map((student) => (
          <Student key={student._id} student={student} />
        ))}
      </main>
    </>
  );
}
