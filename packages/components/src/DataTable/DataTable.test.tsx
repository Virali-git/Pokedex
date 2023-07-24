import * as React from "react";
import { render } from "@testing-library/react";
import { DataTable } from "./DataTable";

test("DataTable renders without crashing", () => {
  const rows = [{ name: "John Doe", url: "https://example.com" }];
  const columns = [{ field: "name", headerName: "Name" }];
  const pageSizeOptions = [10, 20, 50];
  const onRowClick = jest.fn();
  const getRowId = (row) => row.name;
  const paginationModel = { page: 1, pageSize: 10 };
  const paginationModelChange = jest.fn();
  const isLoading = false;
  const rowCount = 1;

  const { asFragment } = render(
    <DataTable
      rows={rows}
      column={columns}
      pageSizeOptions={pageSizeOptions}
      onRowClick={onRowClick}
      getRowId={getRowId}
      paginationModel={paginationModel}
      paginationModelChange={paginationModelChange}
      isLoading={isLoading}
      rowCount={rowCount}
    />
  );

  // Assert that the rendered component matches the stored snapshot
  expect(asFragment()).toMatchSnapshot();
});
