import { useState } from 'react'
// import { IColumn } from './types'

interface SortConfig {
  key: string
  direction: 'asc' | 'desc'
}

const useSort = <T extends Record<string, unknown>>(
  data: T[]
  //columns: IColumn<T>[]
) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: '',
    direction: 'asc',
  })

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig.key === '') return 0

    const aValue = a[sortConfig.key]
    const bValue = b[sortConfig.key]

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    } else if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue
    }

    return 0
  })

  const handleSort = (columnName: keyof T) => {
    let direction: 'asc' | 'desc' = 'asc'
    if (sortConfig.key === columnName && sortConfig.direction === 'asc') {
      direction = 'desc'
    }
    setSortConfig({ key: columnName as string, direction })
  }

  return { sortedData, handleSort, sortConfig }
}

export default useSort
