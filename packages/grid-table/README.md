
# GridTable Component

```typescript
import React from 'react';
import { IGridTable, IColumn, IGridTableStyles, FieldValues } from './GridTable';

// Define the data interface
interface UserData  {
  name: string;
  age: number;
  email: string;
}

const data: UserData[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
];

const columns: IColumn<UserData>[] = [
  { name: 'name', align: 'left' },
  { name: 'age', align: 'center' },
  { name: 'email', align: 'right' },
];

// Optional styles
const gridTableStyles: IGridTableStyles = {
  containerStyle: { padding: '10px', border: '1px solid #ccc' },
  headerStyle: { backgroundColor: '#f4f4f4', fontWeight: 'bold' },
  rowStyle: { borderBottom: '1px solid #e0e0e0' },
};

//usage
const UserDataGridTable = () => {
  return (
    <GridTable
      data={data}
      columns={columns}
      gridTableStyles={gridTableStyles}   
      noDataText="No data available"
    />
  );
};

export default UserDataGridTable;
```



## Types

### GridTable
The `IGridTable` interface defines the main table structure and includes properties for data, columns, styles, resizing, sorting, and fallback text.

```typescript
export interface IGridTable<T extends FieldValues> {
  data: T[];
  columns: IColumn<T>[];
  gridTableStyles?: IGridTableStyles;
  resizable?: boolean;
  sortable?: boolean;
  noDataText?: string;
}
```

- `data`: An array representing each row's data in the table.
- `columns`: An array of columns defined by `IColumn`.
- `gridTableStyles` (optional): Custom styles for the container, header, and rows.
- `resizable` (optional): Allows columns to be resizable.
- `sortable` (optional): Enables data sorting.
- `noDataText` (optional): Text to display when there’s no data in the table.


### Columns

The `IColumn` interface defines the structure of an individual column in the table, including options for text alignment and custom components.

```typescript
export interface IColumn<F extends FieldValues> {
  name: FieldName<F>;
  align?: 'left' | 'right' | 'center';
  component?: React.ReactNode;
}
```

**Properties:**
- `name`: Name of the field corresponding to the column data.
- `align` (optional): Alignment of the column content (`'left'`, `'right'`, or `'center'`).
- `component` (optional): A custom React component to render within the column.


### Style
The `IGridTableStyles` interface allows you to specify custom CSS styles for the table container, header, and rows.

```typescript
export interface IGridTableStyles {
  containerStyle: React.CSSProperties;
  headerStyle: React.CSSProperties;
  rowStyle: React.CSSProperties;
}
```

**Properties:**
- `containerStyle`: Defines the main container style of the table.
- `headerStyle`: Defines the style of the column headers.
- `rowStyle`: Defines the style of the table rows.


## Installation

To use this component, install it from npm:

```bash
npm install 
```

## License

MIT License. See LICENSE file for more details.
