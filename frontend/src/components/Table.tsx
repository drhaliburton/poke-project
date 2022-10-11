import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  ColumnDef,
  flexRender
} from '@tanstack/react-table'
import { useMemo, useState } from 'react'
import { Pokemon } from '../types'
import { Column, ColumnWrapper, Header, Row, TableLayout } from './Table.styles'

const buildImagePath = (id: string) => {
  let zeroCount = 3;
  zeroCount = zeroCount - id.length
  return `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${"0".repeat(zeroCount)}${id}.png`
}

const Table = (
  { pokemon, isLoading }:
    { pokemon: Pokemon[], isLoading: boolean }
) => {
  const [sorting, setSorting] = useState<SortingState>([{ id: 'id', desc: false }])

  const columns = useMemo<ColumnDef<Pokemon>[]>(() => {
    const idCol: ColumnDef<Pokemon> = {
      accessorKey: "id",
      id: "id",
      header: "ID",
    }

    const imageCol: ColumnDef<Pokemon> = {
      id: "image",
      header: "",
      cell: info => <img
        src={buildImagePath(info.row.original.id.toString())}
        alt={info.row.original.name.english} />
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
    return [idCol, imageCol, nameCol, typesCol, hpCol, attackCol, defenseCol, speedCol]
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
            {headerGroup.headers.map(header => {
              const columnSort = header.column.getIsSorted();
              return (
                <Header key={header.id}>
                  <Column onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {columnSort ? {
                      asc: '▲',
                      desc: '▼'
                    }[columnSort] : undefined}
                  </Column>
                </Header>)
            })}
          </Row>
        ))}
      </thead>
      <tbody>
        {!isLoading ? rows.map((row, index) => (
          <Row key={row.id} isOdd={!(index % 2)}>
            {row.getVisibleCells().map(cell => (
              <ColumnWrapper key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </ColumnWrapper>
            ))}
          </Row>
        )) : <Row><ColumnWrapper>Loading...</ColumnWrapper></Row>}
      </tbody>
    </TableLayout>
  )
}

export { Table }