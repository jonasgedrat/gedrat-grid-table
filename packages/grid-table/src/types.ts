import React from 'react'

export interface IGridTableStyles {
  containerStyle: React.CSSProperties
  headerStyle: React.CSSProperties
  rowStyle: React.CSSProperties
}

export type FieldValues = Record<string, unknown>
export type FieldName<F extends FieldValues> = keyof F & string

export interface IColumn<F extends FieldValues> {
  name: FieldName<F>
  align?: 'left' | 'right' | 'center'
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
