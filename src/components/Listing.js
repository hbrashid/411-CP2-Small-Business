import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'

const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            
            <div className="flex-container">
            
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make/Model</TableCell>
                        <TableCell>MPG</TableCell>
                        <TableCell>Cylinders</TableCell>
                        <TableCell>Horsepower</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business) => (
                    <TableRow key={business.id}>
                        <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell>
                        <TableCell>{business["name"]}</TableCell>
                        <TableCell>{business["description"]}</TableCell>
                        <TableCell>{business["address"]}</TableCell>
                        <TableCell>{business["operating hours"]}</TableCell>
                        <TableCell>
                            
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing
