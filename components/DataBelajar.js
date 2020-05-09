import React from 'react'
import {Form, Select, Input, TextArea, Button, Step, Segment, Grid} from 'semantic-ui-react'


const preferensiOptions = [
    {key:'lp', text:'Laki-laki atau Perempuan', value: 'Laki-laki atau Perempuan'},
    {key: 'l', text:'Laki-laki', value: 'Laki-laki'},
    {key: 'p', text:'Perempuan', value: 'Perempuan'},
]

const jenjangOptions = [
    {key:'7', text: '7 SMP', value:'7 SMP'},
    {key:'8', text: '8 SMP', value:'8 SMP'},
    {key:'9', text: '9 SMP', value:'9 SMP'},
    {key:'10', text: '10 SMA', value:'10 SMA'},
    {key:'11', text: '11 SMA', value:'11 SMA'},
    {key:'12', text: '12 SMA', value:'12 SMA'},
]
const mapelOptions = [
    {key: 'm', text:'Matematika', value: 'Matematika'},
    {key: 'f', text: 'Fisika', value: 'Fisika'},
    {key: 'k', text: 'Kimia', value: 'Kimia'},
]

const waktuOptions = [
    {key: '9', text:'9.00', value:'9.00'},
    {key: '10', text:'10.00', value:'10.00'},
    {key: '11', text:'11.00', value:'11.00'},
    {key: '13', text:'13.00', value:'13.00'},
    {key: '14', text:'14.00', value:'14.00'},
    {key: '15', text:'15.00', value:'15.00'},
    {key: '16', text:'16.00', value:'16.00'},
    {key: '17', text:'17.00', value:'17.00'},
    {key: '18', text:'18.00', value:'18.00'},
    {key: '19', text:'19.00', value:'19.00'},
    
]
const durasiOptions = [
    {key: '1', text:'1 jam', value:'1 jam'},
    {key: '1,5', text:'1,5 jam', value:'1,5 jam'},
    {key: '2', text:'2 jam', value:'2 jam'},
    {key: '2,5', text:'2,5 jam', value:'2,5 jam'},
    {key: '3', text:'3 jam', value:'3 jam'},
]

const tipeKelasOptions = [
    {key:'on', text:'Online', value:'Online'},
    {key: 'off', text:'Offline', value:'Offline'},
]

const FormDataBelajar = (props) =>{
    const {jenjang, mapel, preferensi, tanggal, waktu, durasi, tipeKelas, pesan} = props.values
    return(
        <React.Fragment>
            <Step.Group attached='top' stackable='tablet'>
                <Step active>
                    <Step.Content>
                    <Step.Title>Data Belajar</Step.Title>
                    </Step.Content>
                </Step>
                <Step disabled>
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
                                control={Select}
                                placeholder = 'Pilih...'
                                options = {jenjangOptions}
                                label='Jenjang'
                                value={jenjang}
                                name='jenjang'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options = {mapelOptions}
                                label='Mata Pelajaran'
                                value={mapel}
                                name='mapel'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Input}
                                type = 'date'
                                label='Tanggal Pertemuan'
                                value={tanggal}
                                name='tanggal'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options={waktuOptions}
                                label='Waktu Pertemuan'
                                value={waktu}
                                name='waktu'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options={durasiOptions}
                                label='Durasi Pertemuan'
                                value={durasi}
                                name='durasi'
                                onChange={props.handleChange}
                                required
                            />
                        </Grid.Column>
                        <Grid.Column>

                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options = {tipeKelasOptions}
                                label='Tipe Kelas'
                                value={tipeKelas}
                                name='tipeKelas'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={Select}
                                placeholder = 'Pilih...'
                                options = {preferensiOptions}
                                label='Preferensi Guru'
                                value={preferensi}
                                name='preferensi'
                                onChange={props.handleChange}
                                required
                            />
                            <Form.Field
                                control={TextArea}
                                label='Pesan Tambahan'
                                placeholder='Masukan Pesan Tambahan'
                                value={pesan}
                                name='pesan'
                                rows = '6'
                                onChange={props.handleChange}
                            />       
                            <Button onClick={props.next}>Selanjutnya</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </React.Fragment>
    )
}
export {FormDataBelajar}