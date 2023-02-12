import PropTypes from "prop-types";

export default function Student({ student }) {
  return (
    <section key={student._id}>
      <h2>{student.name}</h2>
    </section>
  );
}

Student.propTypes = {
  student: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    grades: PropTypes.arrayOf(
      PropTypes.exact({
        _id: PropTypes.string.isRequired,
        gradeType: PropTypes.oneOf(["exam", "quiz", "homework"]).isRequired,
        name: PropTypes.string.isRequired,
        earned: PropTypes.number.isRequired,
        possible: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
};
