import React from 'react'
import { Table, Container } from 'semantic-ui-react';

function Planets({data}) {
    return (
        <div>
        <Container>
        <div style={{border:'3px solid black'}}>
        <Table padded>
        <Table.Header>
        <Table.Row className="ui definition">
            <Table.HeaderCell singleLine>Name</Table.HeaderCell>
            <Table.HeaderCell>Population</Table.HeaderCell>
            <Table.HeaderCell>Rotation Period</Table.HeaderCell>
            <Table.HeaderCell>Orbital Period</Table.HeaderCell>
            <Table.HeaderCell>Daimeter</Table.HeaderCell>
            <Table.HeaderCell>Climate</Table.HeaderCell>
            <Table.HeaderCell>Surface Water</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        {data.map((planet, i) => {
            return (
            <Table.Row key={i}>
                <Table.Cell>{planet.name}</Table.Cell>
                <Table.Cell>{planet.population}</Table.Cell>
                <Table.Cell>{planet.rotation_period}</Table.Cell>
                <Table.Cell>{planet.orbital_period}</Table.Cell>
                <Table.Cell>{planet.diameter}</Table.Cell>
                <Table.Cell>{planet.climate}</Table.Cell>
                <Table.Cell>{planet.surface_water}</Table.Cell>
            </Table.Row>
        )})}
        </Table.Body>
    </Table>
    </div>
    </Container>
        </div>
    )
}

export default Planets;
