import React from 'react';



const SEGURITY_CODE = 'paradigma';

function UseState ( {name} ){


    const [value, setValue] = React.useState(''); //estado dinamico

    const [error, setError] = React.useState(false); //Estados independientes
    const [loading, setLoading] = React.useState(false);

    console.log(value)


    React.useEffect(()=> {

        console.log('empezando el efecti')
        
        if(!!loading){ // si loading es true
            setTimeout(()=> {
                console.log('haciendo validacion')


                if(value !== SEGURITY_CODE){
                    setError(true)
                }/* else{
                    setError(false)  //2- forma de actualizar el estado
                } */
                setLoading(false)
                
                console.log('terminando validacion')
            }, 3000)
        }

        console.log('terminando')


    },[loading]) // se ejecuta cuando hay cambios en loading

    return (
        <div>
                <h2>Eliminar {name}</h2>
                <p>Por favor, escribe el codigo de seguridad</p>


                {(error && !loading ) && (  //si error es true y loading es false FORMA PARA NO ACTUALIZAR EL ESTADO
                    <p>El codigo es incorrecto</p>
                )}


                {loading && (  
                    <p>Cargando</p>
                )}


                <input placeholder="Codigo de seguridad"
                value = {value} //siempre poner esto ojo
                onChange = {(event) => { //recibe lo que acaba de escribir los usuarios
                    setValue(event.target.value)
                    //setError(false) //3-forma de actualizar estado, pero se ejecuta a cada rato
                }}
                />
                <button 
                    onClick={() =>{ 
                        setLoading(true)
                        //setError(false)forma de actualizar estado 1
                    
                    }}
                >Comprobar</button>

            </div>
    )
}
export {UseState}




