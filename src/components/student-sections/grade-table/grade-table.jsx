import Table from "@mui/material/Table";
import GradeHead from "./grade-head";
import GradeBody from "./grade-body";
import PropTypes from "prop-types";

export default function GradeTable({ grades }) {
  return (
    <Table aria-label="grades-table">
      <GradeHead />
      <GradeBody grades={grades} />
    </Table>
  );
}

GradeTable.propTypes = {
  grades: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      earned: PropTypes.number.isRequired,
      possible: PropTypes.number.isRequired,
    })
  ).isRequired,
};
