import React from 'react'
import Head from 'next/head'
import {Form, Select, Input, TextArea, Button, Segment, Step, Container, Grid, Image} from 'semantic-ui-react'
import avatar from '../utils/images/avatar.png'

const HeadForm = () =>{
    return(
        <React.Fragment>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                    integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                    crossorigin="anonymous"/>
            </Head>  
        </React.Fragment>
    )
}

const genderOptions = [
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

const provinsiOptions = [
    {key:'j', text:'Jakarta', value:'Jakarta'},
    {key:'jb', text:'Jawa Barat', value:'Jawa Barat'},
]

const kotaOptions = [
    {key:'dpk', text:'Depok', value:'Depok'},
    {key:'bdg', text:'Bandung', value:'Bandung'}
]


class RegistrasiTutor extends React.Component{
    state ={
        nama:'', 
        universitas:'', 
        fakultas:'', 
        jenjang:'', 
        mapel:'', 
        gender:'', 
        provinsi:'', 
        kota:'', 
        nohp:'', 
        instagram:'', 
        alamat:'', 
        deskripsi:'',
        ktp:null,
        cv:null,
        fotoProfil:null,
        ktpName:'',
        cvName:'',
        fotoName:'',
    }

    handleSubmit =  (e) => {
        e.preventDefault();
        alert('Form has been submitted')
    }

    handleInputImage = (event) =>{
        if (event.target.files && event.target.files[0]) {
            if (event.target.name === "ktp"){
                this.setState({
                    ktpName : event.target.files[0].name,
                    [event.target.name] : event.target.files[0]
                })
            }
            if (event.target.name === "cv"){
                this.setState({
                    cvName : event.target.files[0].name,
                    [event.target.name] : event.target.files[0]
                })
            }
            if (event.target.name === "fotoProfil"){
                this.setState({
                    fotoName : URL.createObjectURL(event.target.files[0]),
                    [event.target.name] : event.target.files[0]
                })
            }
          }
        console.log('nama', event.target.name, 'target', event.target.files[0])
    }

    handleChange = (e, {name, value}) => {
        this.setState({ [name] : value  })
        console.log(value)
    }

    render(){
        const {nama, universitas, fakultas, jenjang, mapel, gender, provinsi, kota, nohp, instagram, alamat, deskripsi, cv, ktp, fotoProfil, ktpName, fotoName, cvName} = this.state
        return(
            <React.Fragment>
                <HeadForm/>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Step.Group attached='top' stackable='tablet'>
                            <Step active>
                                <Step.Content>
                                <Step.Title>Form Registrasi Tutor</Step.Title>
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
                                            name='nama'
                                            value={nama}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Input}
                                            label='Universitas'                            
                                            name='universitas'
                                            value={universitas}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Input}
                                            label='Fakultas'                            
                                            name='fakultas'
                                            value={fakultas}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Select}
                                            placeholder = 'Pilih...'
                                            options = {genderOptions}
                                            label='Jenis Kelamin'                            
                                            name='gender'
                                            value={gender}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Input}
                                            label='No. Whatsapp'                            
                                            name='nohp'
                                            value={nohp}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Input}
                                            label='Instagram'                            
                                            name='instagram'
                                            value={instagram}
                                            onChange={this.handleChange}
                                        />
                                        <Form.Field
                                            control={Select}
                                            placeholder = 'Pilih...'
                                            options = {jenjangOptions}
                                            label='Jenjang'                            
                                            name='jenjang'
                                            value={jenjang}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Select}
                                            placeholder = 'Pilih...'
                                            options = {mapelOptions}
                                            label='Mata Pelajaran'                            
                                            name='mapel'
                                            value={mapel}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Select}
                                            placeholder = 'Pilih...'
                                            options={provinsiOptions}
                                            label='Provinsi'                            
                                            name='provinsi'
                                            value={provinsi}
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field
                                            control={Select}
                                            placeholder = 'Pilih...'
                                            options={kotaOptions}
                                            label='Kota/Kabupaten'                            
                                            name='kota'
                                            value={kota}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Form.Field
                                            control={TextArea}
                                            label='Alamat'                                 
                                            name='alamat'
                                            value={alamat}
                                            rows = '2'
                                            onChange={this.handleChange}
                                            required
                                        /> 
                                        <Form.Field
                                            control={TextArea}
                                            label='Deskripsi Diri'                            
                                            name='deskripsi'
                                            value={deskripsi}
                                            rows = '5'
                                            onChange={this.handleChange}
                                            required
                                        />
                                        <Form.Field centered required>
                                            <label>Foto Profil (jpg/jpeg)</label>
                                            {fotoProfil === null ?
                                            <Image src={avatar}  size='small' bordered rounded style={{height:'200px'}}/> : 
                                            <Image src={fotoName} size='small' rounded bordered style={{height:'200px'}}/>                                     
                                            }  
                                            <Input 
                                                type="file" 
                                                id="fotoProfil" 
                                                name='fotoProfil' 
                                                accept='image/jpeg'                                                
                                                hidden 
                                                onChange={this.handleInputImage} 
                                            /> 
                                        </Form.Field>
                                        <Button 
                                            icon="file" 
                                            content="Choose File"
                                            labelPosition="left" 
                                            labelPosition="left" 
                                            as="label" 
                                            htmlFor="fotoProfil" 
                                            type="button"
                                            className="mb-3"
                                        />
                                        <Form.Field required>
                                            <label>CV (pdf)</label>
                                            <Input 
                                                type="file" 
                                                accept="application/pdf"
                                                id="cv" 
                                                name='cv' 
                                                hidden 
                                                onChange={this.handleInputImage} 
                                            /> 
                                        </Form.Field>
                                        <Button 
                                            icon="file" 
                                            content="Choose File"
                                            labelPosition="left" 
                                            as="label" 
                                            htmlFor="cv" 
                                            type="button"
                                            className="mb-3"
                                        />
                                        <span>{cvName}</span>
                                        <Form.Field required>
                                            <label>KTP/KTM (jpg/jpeg)</label>
                                            <Input 
                                                type="file" 
                                                id="ktp"
                                                name='ktp'
                                                accept='image/jpeg'
                                                hidden 
                                                onChange={this.handleInputImage} 
                                            /> 
                                        </Form.Field>
                                        <Button 
                                            icon="file" 
                                            content="Choose File"
                                            labelPosition="left" 
                                            as="label" 
                                            htmlFor="ktp" 
                                            type="button"
                                            className="mb-3"
                                        />
                                        <span>{ktpName}</span>
                                        
                                        <br/>                                         
                                        <Button color='blue' type='submit'>Submit</Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}
export default RegistrasiTutor