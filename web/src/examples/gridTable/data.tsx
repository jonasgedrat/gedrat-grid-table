import { FieldValues, IColumn } from '@gedrat/grid-table'

export interface MyData extends FieldValues {
  id: number
  name: string
  userId: number
  creationDate: string
}

export const columns: IColumn<MyData>[] = [
  { name: 'id', align: 'center' },
  { name: 'name' },
  { name: 'userId' },
  {
    name: 'creationDate',
    align: 'center',
  },
  { name: '...' },
]

export const data: MyData[] = [
  {
    id: 316,
    name: 'prednder discador',
    userId: 4,
    creationDate: '2024-08-14T14:00:36Z',
  },
  {
    id: 317,
    name: 'apagar discador',
    userId: 4,
    creationDate: '2024-08-14T14:02:28Z',
  },
  {
    id: 319,
    name: 'Inverter status VX1050',
    userId: 2,
    creationDate: '2024-08-19T18:10:01Z',
  },
  {
    id: 321,
    name: 'Alarme do MT-543E',
    userId: 2,
    creationDate: '2024-08-29T10:59:31Z',
  },
  {
    id: 322,
    name: 'Economy',
    userId: 3,
    creationDate: '2024-09-06T08:53:48Z',
  },
  {
    id: 323,
    name: 'liga',
    userId: 2,
    creationDate: '2024-09-17T18:44:43Z',
  },
  {
    id: 325,
    name: 'teste',
    userId: 2,
    creationDate: '2024-11-04T01:52:16Z',
  },
]
