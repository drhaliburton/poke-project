import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
  flexRender
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Pokemon, PokemonType, Type } from '../types'
import { Column, ColumnWrapper, Header, Row, TableLayout } from './Table.styles'

const Table = (
  { pokemon, isLoading }:
    { pokemon: Pokemon[], types: Type[], isLoading: boolean }
) => {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'name', desc: true }])

  const columns = useMemo<ColumnDef<Pokemon>[]>(() => {
    const idCol: ColumnDef<Pokemon> = {
      accessorKey: "id",
      id: "id",
      header: "ID",
    }

    const nameCol: ColumnDef<Pokemon> = {
      accessorFn: row => row.name.english,
      id: "name",
      header: "Name",
    }

    const typesCol: ColumnDef<Pokemon> = {
      accessorFn: row => row.type.join(', '),
      id: "type",
      header: "Types",
    }

    const hpCol: ColumnDef<Pokemon> = {
      accessorFn: row => row.base.HP,
      id: "HP",
      header: "HP",
    }

    const attackCol: ColumnDef<Pokemon> = {
      accessorFn: row => row.base.Attack,
      id: "Attack",
      header: "Attack",
    }
    const defenseCol: ColumnDef<Pokemon> = {

      accessorFn: row => row.base.Defense,
      id: "Defense",
      header: "Defense",
    }
    const speedCol: ColumnDef<Pokemon> = {
      accessorFn: row => row.base.Speed,
      id: "Speed",
      header: "Speed",
    }
    return [idCol, nameCol, typesCol, hpCol, attackCol, defenseCol, speedCol]
  }, [])
  const table = useReactTable(
    {
      data: pokemon,
      columns,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel()
    })

  const headers = table.getHeaderGroups() || []
  const rows = table.getRowModel().rows || []
  return (
    <TableLayout>
      <thead>
        {headers.map(headerGroup => (
          <Row key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <Header key={header.id}>
                <Column onClick={header.column.getToggleSortingHandler()}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Column>
              </Header>)
            )}
          </Row>
        ))}
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <Row key={row.id} isOdd={!(index % 2)}>
            {row.getVisibleCells().map(cell => (
              <ColumnWrapper key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </ColumnWrapper>
            ))}
          </Row>
        ))}
      </tbody>
    </TableLayout>
  )
}

export { Table }