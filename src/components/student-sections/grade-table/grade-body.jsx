import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export default function GradeBody({ grades }) {
  return (
    <TableBody>
      {grades.map((grade) => {
        return (
          <TableRow key={grade._id}>
            <TableCell>{grade.name}</TableCell>
            <TableCell>{grade.earned}</TableCell>
            <TableCell>{grade.possible}</TableCell>
            <TableCell>
              {((grade.earned / grade.possible) * 100).toFixed(1)}
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
