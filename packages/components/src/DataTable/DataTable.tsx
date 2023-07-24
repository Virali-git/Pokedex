import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";

export type RowData = { name: string; url: string };

interface IDataTableProps {
  rows: RowData[];
  column: GridColDef[];
  onRowClick: ({ row }: { row: RowData }) => void;
  getRowId: (row: RowData) => string | number;
  pageSizeOptions: number[];
  paginationModel: { page: number; pageSize: number };
  paginationModelChange: (arg: GridPaginationModel) => void;
  isLoading: boolean;
  rowCount: number;
}
export const DataTable = ({
  rows,
  column,
  pageSizeOptions,
  onRowClick,
  getRowId,
  paginationModel,
  paginationModelChange,
  isLoading = false,
  rowCount,
}: IDataTableProps) => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        sx={{
          "& .MuiDataGrid-row:hover": {
            cursor: "pointer",
            backgroundColor: "#ADD8E6",
          },
        }}
        rows={rows}
        columns={column}
        pageSizeOptions={pageSizeOptions}
        onRowClick={(row) => onRowClick(row)}
        rowCount={rowCount}
        getRowId={(row: RowData) => getRowId(row)}
        pagination
        paginationMode="server"
        paginationModel={paginationModel}
        onPaginationModelChange={paginationModelChange}
        loading={isLoading}
      />
    </div>
  );
};
