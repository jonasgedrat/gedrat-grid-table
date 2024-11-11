import { GridTable } from '@gedrat/grid-table'
import { columns } from './data'
import { hugeData } from './hugeData'

const GridTableExample = () => {
  return (
    <div>
      <GridTable data={hugeData} columns={columns} sortable resizable />
    </div>
  )
}

export default GridTableExample
