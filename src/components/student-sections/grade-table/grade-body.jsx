import TableBody from "@mui/material/TableBody";
import PropType from "prop-types";
import GradeRow from "./grade-row";

export default function GradeBody({ grades }) {
  return (
    <TableBody>
      {grades.map((grade) => {
        return <GradeRow key={grade._id} grade={grade} />;
      })}
    </TableBody>
  );
}

GradeBody.propTypes = {
  grades: PropType.arrayOf(
    PropType.shape({
      _id: PropType.string.isRequired,
      name: PropType.string.isRequired,
      earned: PropType.number.isRequired,
      possible: PropType.number.isRequired,
    })
  ).isRequired,
};
