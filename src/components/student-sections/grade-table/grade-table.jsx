import Table from "@mui/material/Table";
import GradeHead from "./grade-head";
import GradeBody from "./grade-body";

export default function GradeTable({ grades }) {
  return (
    <Table aria-label="grades-table">
      <GradeHead />
      <GradeBody grades={grades} />
    </Table>
  );
}
