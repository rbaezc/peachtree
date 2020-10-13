import React, { Fragment, useState } from 'react';
import { useFilters, useSortBy, useTable } from 'react-table';

export default function DataTable ({columns, data}) {
    const [filterInput, setFilterInput] = useState('');
    // state and functions returned from useTable
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
      } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy
    );

    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("merchant", value);
        setFilterInput(value);
    }

    return (
        <Fragment>
            <input
            className="form-control search-input"
            value={filterInput}
            onChange={handleFilterChange}
            placeholder={"Search by typing"} />
            
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th 
                                {...column.getHeaderProps(column.getSortByToggleProps())}
                                className={ column.isSorted ? column.isSortedDesc ? "sort-desc" : "sort-asc" : ""}>
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}