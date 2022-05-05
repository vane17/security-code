import React from 'react';

class Loading extends React.Component { 
   componentWillUnmount(){ // si hay cambio en componente lo desmonta
        console.log('componentWillUnmount')
    }
 
    render(){

        return (
            <p>Cargando ...</p>
        )
    }
}

export {Loading}