import React from 'react'

export interface IGridTableStyles {
  containerStyle: React.CSSProperties
  headerStyle: React.CSSProperties
  rowStyle: React.CSSProperties
}

export type FieldValues = Record<string, any>
export type FieldName<F extends FieldValues> = keyof F & string

export interface IColumn<F extends FieldValues> {
  name: FieldName<F>
  align?: 'left' | 'right' | 'center'
  type?: 'string' | 'number'
  component?: React.ReactNode
}

export interface IGridTable<T extends FieldValues> {
  data: T[]
  columns: IColumn<T>[]
  gridTableStyles?: IGridTableStyles
  resizable?: boolean
  sortable?: boolean
  noDataText?: string
}

// interface MyData extends FieldValues {
//   id: number
//   name: string
//   userId: number
//   creationDate: string
// }

// const columns: IColumn<MyData>[] = [
//   { name: 'id', align: 'center' },
//   { name: 'name' },
//   { name: 'userId' },
//   { name: 'creationDate' },
// ]

// const data: MyData[] = [
//   {
//     id: 316,
//     name: 'prednder discador',
//     userId: 4,
//     creationDate: '2024-08-14T14:00:36Z',
//   },
//   {
//     id: 317,
//     name: 'apagar discador',
//     userId: 4,
//     creationDate: '2024-08-14T14:02:28Z',
//   },
// ]

// const gridTable: IGridTable<MyData> = {
//   data,
//   columns,
// }
