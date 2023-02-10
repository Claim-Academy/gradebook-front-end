import TableBody from "@mui/material/TableBody";
import GradeRow from "./grade-row";

export default function GradeBody({ grades }) {
  return (
    <TableBody>
      {grades.map((grade) => {
        return <GradeRow grade={grade} />;
      })}
    </TableBody>
  );
}
