import { FieldValues, IColumn } from 'gedrat-grid-table'

export interface MyData extends FieldValues {
  id: number
  name: string
  userId: number
  creationDate: string
}

export const columns: IColumn<MyData>[] = [
  { name: 'id', align: 'center', width: 75 },
  { name: 'name' },
  { name: 'userId', align: 'center', width: 75 },
  {
    name: 'creationDate',
    width: 135,

    align: 'center',
  },
  { name: '', width: 75, align: 'center' },
]
