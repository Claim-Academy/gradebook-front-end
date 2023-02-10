import { useLoaderData } from "react-router-dom";
import InputText from "../components/form/input-text";
import StudentSections from "../components/student-sections/student-sections";
import Button from "../components/button";

export default function Students() {
  const students = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Students</h1>
      <form className="flex flex-col items-center gap-y-4">
        <InputText label="Add Student" id="addStudent" />
        <Button text="Add Student" />
      </form>
      <StudentSections students={students} />
    </div>
  );
}
