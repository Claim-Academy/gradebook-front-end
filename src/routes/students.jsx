import { useLoaderData } from "react-router-dom";

export default function Students() {
  const students = useLoaderData();

  return (
    <div>
      <h1>Students</h1>
    </div>
  );
}
