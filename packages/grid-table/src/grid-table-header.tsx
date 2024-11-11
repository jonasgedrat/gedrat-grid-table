import { FieldValues, IColumn } from './types'

const GridTableHeader = <T extends FieldValues>({
  columns,
  sortable,
  handleSort,
  sortConfig,
}: {
  columns: IColumn<T>[]
  sortable: boolean
  handleSort: (columnName: keyof T) => void
  sortConfig: { key: string; direction: 'asc' | 'desc' }
}) => {
  if (!Array.isArray(columns) || columns.length === 0) {
    return <h5>No columns provided</h5>
  }

  console.log(sortConfig)

  const colsLength = columns.length
  return (
    <>
      {columns.map((column, i) => {
        const positionClassName =
          i === 0 ? 'start-cell' : i === colsLength - 1 ? 'end-cell' : ''

        const sortText =
          sortConfig.key === ''
            ? ''
            : sortConfig.key !== column.name
              ? ''
              : sortConfig.key === column.name && sortConfig.direction === 'asc'
                ? '↑'
                : '↓'

        return (
          <div
            key={column.name as string}
            className={`gedrat-grid-table-header ${positionClassName}`}
            style={{
              cursor: sortable ? 'pointer' : 'default',
            }}
            onClick={() => sortable && handleSort(column.name)}
          >
            {sortText} {sortText && <>&nbsp;</>}
            {column.name}
          </div>
        )
      })}
    </>
  )
}

export default GridTableHeader
