export type FieldValues = Record<string, unknown>
export type FieldName<F extends FieldValues> = keyof F & string

export interface IColumn<F extends FieldValues> {
  name: FieldName<F>
  align?: 'left' | 'right' | 'center'
}

export interface IGridTable<T extends FieldValues> {
  data: T[]
  columns: IColumn<T>[]
  resizable?: boolean
  sortable?: boolean
  noDataText?: string
}
