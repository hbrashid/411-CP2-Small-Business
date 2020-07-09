import React, { Component } from 'react'
import {
    Button,
    TextField,
    Container
} from '@material-ui/core'

class AddListing extends Component {
    state = {
        id: '',
        name: '',
        description: '',
        address: '',
        hours: '',
        // coordsLat:'',
        // coordsLng: ''
    }

    onChange = e => {
        this.setState({
          text: e.target.value,
        });
      };


      handleTextChange = (e) => {
        const state = { ...this.state }
        state[e.target.id] = e.target.value
        this.setState(state)
      }

      handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state };
        this.props.addBusiness(payload);
        this.props.history.push("/");
      }

   

    render() {
        return (
            
                <div>
                    <Container>
                        
                            <form 
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                    <TextField 
                                    id="id" 
                                    placeholder="ID" 
                                    value={this.state.id} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='number' />
                                <TextField 
                                    id="name" 
                                    placeholder="Name" 
                                    value={this.state.name} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='text' />
                                <TextField 
                                    id="description" 
                                    placeholder="Description" 
                                    value={this.state.description} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='text' />
                                <TextField 
                                    id="address" 
                                    placeholder="Address" 
                                    value={this.state.address} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='text' />
                                <TextField 
                                    id="hours" 
                                    placeholder="Hours" 
                                    value={this.state.hours} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='text' />
                                    {/* <TextField 
                                    id="coordsLat" 
                                    placeholder="Latitude" 
                                    value={this.state.coordsLat} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='number' />
                                    <TextField 
                                    id="coordsLng" 
                                    placeholder="Longitude" 
                                    value={this.state.coordsLng} 
                                    onChange={this.handleTextChange} 
                                    required
                                    type='number' /> */}
                                <br />
                                <Button variant="contained" color="primary" type="submit">Add Listing</Button>
                            </form>
                        
                    </Container>
                </div>
            
        )
    }
}

export default AddListing