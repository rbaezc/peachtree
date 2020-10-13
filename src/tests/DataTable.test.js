import React from 'react';
import renderer from 'react-test-renderer';
import DataTable from '../components/DataTable';

test ('DataTable fails if no column is present', () => {
    const component = renderer.create(
        <DataTable columns={null}></DataTable>
    );

    let table = component.toJSON();
    expect(table).toMatchSnapshot();

    // no columns
    table.props.columns;
    // re-rendering
    table = component.toJSON();
    expect(table).toMatchSnapshot();
})