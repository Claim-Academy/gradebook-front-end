import PropTypes from "prop-types";

export default function StudentSections({ students }) {
  return (
    <section>
      {students.map((student) => {
        return (
          <section
            key={student._id}
            className="flex flex-col items-center gap-y-2"
          >
            <h2>{student.name}</h2>
          </section>
        );
      })}
    </section>
  );
}

StudentSections.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
