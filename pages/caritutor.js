import Head from 'next/head'
import React from 'react'
import {Form, Container} from 'semantic-ui-react'

import {FormDataDiri} from '../components/DataDiri'
import {FormDataBelajar} from '../components/DataBelajar'

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

const StepForm = ({ step, values, handleChange, next, prev }) => {
    switch (step) {
        case 1:
            return <FormDataBelajar values={values}
                handleChange={handleChange} next={next}
            />
        case 2:
            return <FormDataDiri values={values}
                handleChange={handleChange}prev={prev}
            />
        default:
            return null;
    }
}

class FormTutor extends React.Component {
    state={
        step:1,
        jenjang:'', 
        mapel:'', 
        preferensi:'', 
        tanggal:'', 
        waktu:'', 
        durasi:'', 
        tipeKelas:'', 
        pesan:'',
        nama:'', 
        email:'', 
        nohp:'', 
        instagram:'', 
        provinsi:'', 
        kota:'', 
        alamat:'',
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        //just show the success page (step 4 )
        this.setState((prevState) => {
            return {
                ...prevState
            }
        })
        if (this.state.jenjang === '' || this.state.mapel === '' || this.state.preferensi === '' || this.state.tanggal === '' ||
            this.state.waktu === '' || this.state.durasi === '' || this.state.tipeKelas === '' || this.state.pesan === '' ){
                alert('Lengkapi Data Belajar')
            }
        else{
            alert('has been submitted')
            console.log(this.state.alamat)
            console.log(this.state.jenjang)
        }
    }

    handleChange = (event, { name, value}) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(value)           
    }

    next = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                step: prevState.step + 1
            }
        });
    }

    prev = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                step: prevState.step - 1
            }
        });
    }

    render (){
        const {step, jenjang,mapel,preferensi,tanggal,waktu,durasi,tipeKelas, 
        pesan,nama, email, nohp, instagram, provinsi, kota, alamat} = this.state
        const values = {step, jenjang,mapel,preferensi,tanggal,waktu,durasi,tipeKelas, 
        pesan,nama, email, nohp, instagram, provinsi, kota, alamat}
        return(
            <React.Fragment>
                <HeadForm/>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <StepForm step={step} values={values} handleChange={this.handleChange} next={this.next} prev={this.prev} />  
                    </Form>
                </Container>
            </React.Fragment>
        )
    }
}
export default FormTutor

