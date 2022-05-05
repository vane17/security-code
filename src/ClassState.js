import React from 'react';
import {Loading} from './Loading';

class ClassState extends React.Component { // que herede

    constructor(props){
        super(props);


        this.state = { //forma de crear estados con clases
            error:true,
            loading:false,
        }
    }

/* UNSAFE_componentWillMount(){ //se ejecuta antes de renderizar el componente, equivalente al useEfecct con array vacio
    //se ejecuta solo la primera vez
    console.log('componentWillMount')

} */

/* componentDidMount(){
    console.log('componentDidMount')
} */

componentDidUpdate(){
    console.log('actualizacion');

    if(!!this.state.loading){ // es necesario porque si no se ejecuta muchas veces
        setTimeout(()=> {
            console.log('haciendo validacion')

            this.setState({loading: false})
            console.log('terminando validacion')
        }, 3000)
    }

}



    render(){



        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Por favor, escribe el codigo de seguridad</p>

                {this.state.error && (  //si error es true entonces renderiza lo siguiente
                    <p>El codigo es incorrecto</p>
                )}


                {this.state.loading && (  
                    <Loading/>
                )}



                <input type="text" placeholder="Codigo de seguridad"/>
                <button
                onClick={() =>this.setState({loading: true})} 
                
                >Comprobar</button>

            </div>
        )
    }
}

export {ClassState}
