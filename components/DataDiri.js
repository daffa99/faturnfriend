import React from 'react'
import {Form, Select, Input, TextArea, Button, Segment, Step, Grid} from 'semantic-ui-react'

const provinsiOptions = [
    {key:'j', text:'Jakarta', value:'Jakarta'},
    {key:'jb', text:'Jawa Barat', value:'Jawa Barat'},
]

const kotaOptions = [
    {key:'dpk', text:'Depok', value:'Depok'},
    {key:'bdg', text:'Bandung', value:'Bandung'}
]

const FormDataDiri = (props) =>{
    const {nama, email, nohp, instagram, provinsi, kota, alamat} = props.values
    return(
        <React.Fragment>
            <Step.Group attached='top' stackable='tablet'>
                <Step completed>
                    <Step.Content>
                    <Step.Title>Data Belajar</Step.Title>
                    </Step.Content>
                </Step>
                <Step active>
                    <Step.Content>
                    <Step.Title>Data Diri</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
            <Segment attached>
                <Grid stackable columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Form.Field
                                control={Input}
                                label='Nama'
                                value={nama}
                                name='nama'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Input}
                                type = 'email'
                                label='Email'
                                value={email}
                                name='email'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Input}
                                label='No. Whatsapp'
                                value={nohp}
                                name='nohp'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Input}
                                label='Instagram'
                                value={instagram}
                                name='instagram'
                                onChange={props.handleChange}
                            />
                        </Grid.Column>
                        <Grid.Column>
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options={provinsiOptions}
                                label='Provinsi'
                                value={provinsi}
                                name='provinsi'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options={kotaOptions}
                                label='Kota/Kabupaten'
                                value={kota}
                                name='kota'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={TextArea}
                                label='Alamat'
                                value={alamat}
                                name='alamat'
                                rows = '3'
                                onChange={props.handleChange}
                                required
                            />   
                            <Button onClick={props.prev}>Sebelumnya</Button>
                            <Button color='blue' type='submit' >Submit</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            
        </React.Fragment>
    )
}
export {FormDataDiri}