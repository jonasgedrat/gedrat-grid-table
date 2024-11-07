import { GridTable } from '@gedrat/grid-table'
import { columns, data } from './data'

const GridTableExample = () => {
  return (
    <div>
      <GridTable data={data} columns={columns} sortable />
    </div>
  )
}

export default GridTableExample
