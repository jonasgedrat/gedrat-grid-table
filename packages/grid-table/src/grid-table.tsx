import { FieldValues, IGridTable } from './types'
import { useGridTable } from './useGridTable'
import GridTableHeader from './grid-table-header'
import GridTableRows from './grid-table-rows'
import useSort from './useSort'

const GridTable = <T extends FieldValues>(props: IGridTable<T>) => {
  const {
    data = [],
    columns = [],
    resizable = false,
    sortable = false,
    noDataText = 'No data available',
  } = props

  const { containerRef, containerStyle } = useGridTable(resizable)
  const { sortedData, handleSort, sortConfig } = useSort(data)

  if (!Array.isArray(data) || data.length === 0) {
    return <h5>{noDataText}</h5>
  }

  return (
    <div style={{ margin: 1, padding: 1 }}>
      <div
        className="gedrat-grid-table"
        ref={containerRef}
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: `repeat(${columns.length}, 1fr)`,
          gridAutoRows: 'min-content',
        }}
      >
        <GridTableHeader
          columns={columns}
          sortable={sortable}
          handleSort={handleSort}
          sortConfig={sortConfig}
        />
        <GridTableRows data={sortedData} columns={columns} />
      </div>
    </div>
  )
}

export default GridTable
