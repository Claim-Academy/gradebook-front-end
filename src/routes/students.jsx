import { useLoaderData } from "react-router-dom";
import StudentSections from "../components/student-sections/student-sections";

export default function Students() {
  const students = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Students</h1>
      <StudentSections students={students} />
    </div>
  );
}
