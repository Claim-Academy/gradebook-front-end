import { useLoaderData, Form } from "react-router-dom";
import InputText from "../components/form/input-text";
import StudentSections from "../components/student-sections/student-sections";
import Button from "../components/button";

export default function Students() {
  const students = useLoaderData();

  return (
    <div>
      <h1 className="text-center">Students</h1>
      <Form className="flex flex-col items-center gap-y-4" method="post">
        <InputText label="Add Student" id="name" />
        <Button text="Add Student" type="submit" />
      </Form>
      <StudentSections students={students} />
    </div>
  );
}
