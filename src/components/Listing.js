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
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Hours</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                
                    <TableRow key={idx}>
                        {/* <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell> */}
                        <TableCell>{business.name}</TableCell>
                        <TableCell>{business.description}</TableCell>
                        <TableCell>{business.address}</TableCell>
                        <TableCell>{business.hours}</TableCell>
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
