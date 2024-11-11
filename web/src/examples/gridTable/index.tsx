import { useCallback, useState } from 'react'
import { FieldName, GridTable } from '@gedrat/grid-table'
import { columns, MyData } from './config'
import { hugeData } from './hugeData'
import { Trash2 } from 'lucide-react'

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
  const customRender = useCallback(
    (record: MyData, columnName: FieldName<MyData>) => {
      const isActive = record === selected

      if (columnName === '') {
        if (isActive) {
          return <Trash2 onClick={() => handleDelete(record)} />
        }
        return <></>
      }

      const cellValue = `${record[columnName]}`

      if (columnName === 'name') {
        return (
          <div className={`${isActive ? '' : 'text-warning'} fw-bold`}>
            {cellValue} {cellValue} {cellValue} {cellValue} {cellValue}{' '}
            {cellValue}
          </div>
        )
      }
      return <>{cellValue}</>
    },

    [selected]
  )

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
