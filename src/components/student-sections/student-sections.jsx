import PropTypes from "prop-types";
import GradeTable from "./grade-table/grade-table";

export default function StudentSections({ students }) {
  return (
    <>
      {students.map((student) => {
        return (
          <section
            key={student._id}
            className="flex flex-col items-center gap-y-2"
          >
            <h2>{student.name}</h2>
            <GradeTable grades={student.grades} />
          </section>
        );
      })}
    </>
  );
}

StudentSections.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      grades: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          earned: PropTypes.number.isRequired,
          possible: PropTypes.number.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
