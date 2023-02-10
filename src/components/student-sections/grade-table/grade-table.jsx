import Table from "@mui/material/Table";
import GradeHead from "./grade-head";

export default function GradeTable({ grades }) {
  return (
    <Table aria-label="grades-table">
      <GradeHead />
    </Table>
  );
}
