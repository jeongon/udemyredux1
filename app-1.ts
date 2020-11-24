

interface Action {
    type:string;
    payload?:any;
}




function reducer(state=10, action:Action ){


    switch (action.type ){
        case incrementadorAction.type:
            return state+=1;
            case decrementadorAction.type:
                return state-=1;
            case multiplicarAction.type:
                return state * action.payload;
        default: 
            return state;
    }

    

}

const incrementadorAction:Action ={
    type:'INCREMENTAR'
}

const decrementadorAction:Action ={
    type:'DECREMENTAR'
}

const multiplicarAction:Action ={
    type:'MULTIPLICAR',
    payload:2
}


console.log(reducer(10,incrementadorAction));

console.log(reducer(10,decrementadorAction));

console.log(reducer(30,multiplicarAction));
