import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { GridColDef, GridPaginationModel } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { WrapperStyle, DataGridStyle } from "./DataTable.styles";
import { IDataTablePropsType, RowData } from "./DataTable.types";

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
}: IDataTablePropsType) => {
  return (
    <Box sx={WrapperStyle}>
      <DataGrid
        sx={DataGridStyle}
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
    </Box>
  );
};
