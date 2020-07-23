import React from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import {checkAuth} from "../checkAuth";

const Listing = (props) => {
  return (
    <Container maxWidth="lg" className="car-container">
        {/* {checkAuth() &&
      <h4>Welcome, {props.user.username}</h4>
        } */}

      <div className="flex-container"></div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
            {checkAuth() &&
              <TableCell>Delete</TableCell>
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {props.businesses.map((business, idx) => (
            <TableRow key={idx}>
              {/* <TableCell component="th" scope="row">
                            {business.id}
                        </TableCell> */}
              <TableCell component={Link} to={`/details/${business.id}`}>
                {business.name}
              </TableCell>
              <TableCell>{business.description}</TableCell>
              <TableCell>{business.address}</TableCell>
              <TableCell>{business.hours}</TableCell>
              {checkAuth() && (
                <TableCell>
                  <DeleteIcon
                    onClick={() => props.deleteBusiness(idx)}
                    color="secondary"
                    
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listing;
