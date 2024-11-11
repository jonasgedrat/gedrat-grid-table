import { useState } from 'react'
import { FieldName, GridTable } from '@gedrat/grid-table'
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

  const handleDelete = (e: MyData) => {
    setSelected(undefined)
    alert('delete: ' + JSON.stringify(e))
  }

  //optional
  const customRender = (record: MyData, columnName: FieldName<MyData>) => {
    if (columnName === '...') {
      if (record === selected) {
        return <div onClick={() => handleDelete(record)}>delete</div>
      }
      return <></>
    }

    const cellValue = `${record[columnName]}`

    if (columnName === 'name') {
      return <div className="text-warning fw-bold">{cellValue}</div>
    }
    return <>{cellValue}</>
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
        customRender={customRender}
      />
    </div>
  )
}

export default GridTableExample
