import { useState } from 'react'
import { GridTable } from '@gedrat/grid-table'
import { columns, MyData } from './data'
import { hugeData } from './hugeData'

const GridTableExample = () => {
  const [selected, setSelected] = useState<MyData | undefined>()

  const handleSelect = (e: MyData) => {
    if (selected === e) {
      setSelected(undefined)
      return
    }
    setSelected(e)
  }

  return (
    <div>
      <GridTable
        data={hugeData}
        columns={columns}
        selected={selected}
        handleSelect={handleSelect}
        sortable
        resizable
      />
    </div>
  )
}

export default GridTableExample
