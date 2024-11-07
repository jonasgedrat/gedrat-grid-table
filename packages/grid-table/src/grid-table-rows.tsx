import React from 'react'
import { IColumn } from './types'

const GridTableRows = <T extends {}>({
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

            const cellData =
              cellValue === ''
                ? ''
                : column?.type === 'number'
                  ? Number(cellValue)
                  : cellValue

            return (
              <div
                key={`${rowIndex}-${column.name}`}
                style={{
                  ...rowStyle,
                  backgroundColor:
                    rowIndex % 2 === 0
                      ? 'var(--bs-grid-table-row-bg)'
                      : 'var(--bs-grid-table-row-even-bg)',

                  textAlign: column.align,
                }}
              >
                {cellData}
              </div>
            )
          })}
        </React.Fragment>
      ))}
    </>
  )
}

export default GridTableRows
