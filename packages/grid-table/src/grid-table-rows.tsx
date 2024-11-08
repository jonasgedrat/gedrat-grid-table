import React from 'react'
import { FieldValues, IColumn } from './types'

const GridTableRows = <T extends FieldValues>({
  data,
  columns,
  rowStyle,
}: {
  data: T[]
  columns: IColumn<T>[]
  rowStyle: React.CSSProperties
}) => {
  return (
    <>
      {data.map((record, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {columns.map((column) => {
            const cellValue = `${record[column.name]}`

            return (
              <div
                key={`${rowIndex}-${column.name}`}
                style={{
                  ...rowStyle,
                  backgroundColor:
                    rowIndex % 2 === 0
                      ? 'var(--grid-table-row-bg)'
                      : 'var(--grid-table-row-even-bg)',

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
