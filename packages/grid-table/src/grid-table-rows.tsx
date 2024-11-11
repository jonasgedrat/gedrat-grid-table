import React from 'react'
import { FieldValues, IColumn } from './types'

const GridTableRows = <T extends FieldValues>({
  data,
  columns,
  selected = undefined,
  onSelectRow,
}: {
  data: T[]
  columns: IColumn<T>[]
  selected?: T
  onSelectRow: (record: T) => void
}) => {
  const colsLength = columns.length
  return (
    <>
      {data.map((record, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {columns.map((column, i) => {
            const cellValue = `${record[column.name]}`
            const positionClassName =
              i === 0 ? 'start-cell' : i === colsLength - 1 ? 'end-cell' : ''
            const isActive = record === selected ? 'active' : ''

            return (
              <div
                onClick={() => onSelectRow(record)}
                className={`gedrat-grid-row-cell ${isActive}
                  ${rowIndex % 2 === 0 ? 'zebra' : ''} ${positionClassName}`}
                key={`${rowIndex}-${column.name}`}
                style={{
                  textAlign: column.align,
                }}
              >
                {cellValue}
              </div>
            )
          })}
        </React.Fragment>
      ))}
    </>
  )
}

export default GridTableRows
