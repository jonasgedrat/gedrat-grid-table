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
    selected = undefined,
    handleSelect,
  } = props

  const { containerRef, containerStyle } = useGridTable(resizable)
  const { sortedData, handleSort, sortConfig } = useSort(data)

  const onSelectRow = (record: T) => {
    if (!handleSelect) return
    handleSelect(record)
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <h5>{noDataText}</h5>
  }

  const selectable = handleSelect ? 'selectable' : ''

  return (
    <div style={{ margin: 1, padding: 1 }}>
      <div
        className={`gedrat-grid-table ${selectable}`}
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
        <GridTableRows
          data={sortedData}
          columns={columns}
          selected={selected}
          onSelectRow={onSelectRow}
        />
      </div>
    </div>
  )
}

export default GridTable
