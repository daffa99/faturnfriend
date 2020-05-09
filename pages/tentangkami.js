import Head from 'next/head'
import React from 'react'

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

class AboutUs extends React.Component{
    render(){
        return(
            <React.Fragment>
                <HeadForm/>
                <h1>Hello World</h1>
            </React.Fragment>
        )
    }
}
export default AboutUs
