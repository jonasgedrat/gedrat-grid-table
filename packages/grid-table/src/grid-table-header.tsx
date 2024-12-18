import { FieldValues, IColumn } from './types'

const GridTableHeader = <T extends FieldValues>({
  columns,
  sortable,
  handleSort,
  sortConfig,
  sortComponents,
}: {
  columns: IColumn<T>[]
  sortable: boolean
  handleSort: (columnName: keyof T) => void
  sortConfig: { key: string; direction: 'asc' | 'desc' }
  sortComponents?: {
    asc: string | React.ReactNode
    desc: string | React.ReactNode
  }
}) => {
  if (!Array.isArray(columns) || columns.length === 0) {
    return <h5>No columns provided</h5>
  }

  const colsLength = columns.length
  return (
    <>
      {columns.map((column, i) => {
        const positionClassName =
          i === 0 ? 'start-cell' : i === colsLength - 1 ? 'end-cell' : ''

        const sortComponent =
          sortConfig.key === ''
            ? ''
            : sortConfig.key !== column.name
              ? ''
              : sortConfig.key === column.name && sortConfig.direction === 'asc'
                ? sortComponents?.asc || '<'
                : sortComponents?.desc || ':'

        return (
          <div
            key={column.name as string}
            className={`gedrat-grid-table-header ${positionClassName}`}
            style={{
              cursor: sortable ? 'pointer' : 'default',
            }}
            onClick={() => sortable && handleSort(column.name)}
          >
            {sortComponent}&nbsp;
            {/* {sortComponents && sortComponents.asc} */}
            {column.name}
          </div>
        )
      })}
    </>
  )
}

export default GridTableHeader
