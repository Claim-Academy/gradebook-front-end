import { useEffect, useState } from "react";
import { apiService } from "../services";

export default function Students() {
  const [students, setStudents] = useState([]);

  // 'useEffect' is a React hook that runs EVERY TIME the component is rendered
  useEffect(
    () => {
      apiService.getAllStudents().then((students) => setStudents(students));
    },

    // DEPENDENCY ARRAY: If any of these values change, the useEffect hook will run again
    []
  );

  return (
    <div>
      <h1>Students</h1>
    </div>
  );
}
