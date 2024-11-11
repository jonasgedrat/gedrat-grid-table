
# GridTable Component

## Super simple table less grid component that just works.




```typescript
import React from 'react';
import { useState } from 'react'
import { IGridTable, IColumn, IGridTableStyles, FieldValues } from '@gedrat-grid-table';

//data interface
interface UserData  {
  name: string;
  age: number;
  email: string;
}

const data: UserData[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
]

//columns definition
const columns: IColumn<UserData>[] = [
  { name: 'name', align: 'left' },
  { name: 'age', align: 'center' },
  { name: 'email', align: 'right' },
]

//component usage
const UserDataGridTable = () => {
 const [selected, setSelected] = useState<MyData | undefined>()

  const handleSelect = (e: MyData) => {
    if (selected === e) {
      setSelected(undefined)
      return
    }
    setSelected(e)
  }

  return (   
      <GridTable
        data={data}
        columns={columns}
        selected={selected}
        handleSelect={handleSelect}
        sortable
        resizable
      />    
  )
}

export default UserDataGridTable;
```


## Style example
```css
:root {
  --gedrat-grid-bg-color: rgba(0, 0, 0, 0.178);
  --gedrat-grid-bg-zebra-color: rgba(9, 189, 90, 0.089);
  --gedrat-row-cell-border: solid 1px rgba(167, 160, 160, 0.07);
  --gedrat-grid-cells-space: 3px;
  --gedrat-grid-cells-radius: 7px;
}

.gedrat-grid-table {
  width: 100% !important;
  text-wrap: wrap;
  background-color: var(--gedrat-grid-bg-color);

  .gedrat-grid-row-cell {
    padding: var(--gedrat-grid-cells-space);
    border-top: var(--gedrat-row-cell-border);
    border-bottom: var(--gedrat-row-cell-border);
    margin-bottom: var(--gedrat-grid-cells-space);

    &.start-cell {
      border-left: var(--gedrat-row-cell-border);
      margin-left: var(--gedrat-grid-cells-space);
      border-radius: var(--gedrat-grid-cells-radius) 0 0
        var(--gedrat-grid-cells-radius);
    }

    &.end-cell {
      border-right: var(--gedrat-row-cell-border);
      border-radius: 0 var(--gedrat-grid-cells-radius)
        var(--gedrat-grid-cells-radius) 0;
      margin-right: var(--gedrat-grid-cells-space);
    }
  }

  .gedrat-grid-table-header {
    position: sticky;
    top: 0;
    z-index: 1;
    text-wrap: nowrap;
    background-color: var(--bs-dark-bg-subtle);

    padding: var(--gedrat-grid-cells-space);
    align-content: center;
    justify-content: center;
    text-align: center;

    &.start-cell {
      // background-color: red;
    }
    &.end-cell {
      // background-color: red;
    }
  }

  .zebra {
    background-color: var(--gedrat-grid-bg-zebra-color);
  }
}

```


## Types

### GridTable
The `IGridTable` interface defines the main table structure and includes properties for data, columns, styles, resizing, sorting, and fallback text.

```typescript
export interface IGridTable<T extends FieldValues> {
  data: T[];
  columns: IColumn<T>[];  
  resizable?: boolean;
  sortable?: boolean;
  noDataText?: string;
}
```

- `data`: An T array representing each row's data in the table.
- `columns`: An array of columns defined by `IColumn`.
- `resizable` (optional): Fit container to the rest of windows height.
- `sortable` (optional): Enables data sorting.
- `noDataText` (optional): Text to display when there’s no data in the table.


### Columns

The `IColumn` interface defines the structure of an individual column in the table, including options for text alignment and custom components.

```typescript
export interface IColumn<F extends FieldValues> {
  name: FieldName<F>;
  align?: 'left' | 'right' | 'center';
  
}
```

**Properties:**
- `name`: Name of the field corresponding to the column data.
- `align` (optional): Alignment of the column content (`'left'`, `'right'`, or `'center'`).



## Installation

To use this component, install it from npm:

```bash
npm install 
```




## License

MIT License. See LICENSE file for more details.
