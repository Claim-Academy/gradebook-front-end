import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

export default function GradeRow({ grade }) {
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
}

GradeRow.propTypes = {
  grade: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    earned: PropTypes.number.isRequired,
    possible: PropTypes.number.isRequired,
  }).isRequired,
};
