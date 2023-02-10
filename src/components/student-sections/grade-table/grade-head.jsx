import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function GradeHead() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Earned</TableCell>
        <TableCell>Out of</TableCell>
        <TableCell>Percentage</TableCell>
      </TableRow>
    </TableHead>
  );
}
