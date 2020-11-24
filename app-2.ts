
import { decrementadorAction, incrementadorAction, multiplicarAction, resetAction } from './contador/contador.actions';
import { contadorReducer } from './contador/contador.reducer';





console.log(contadorReducer(10,incrementadorAction));

console.log(contadorReducer(10,decrementadorAction));

console.log(contadorReducer(30,multiplicarAction));

console.log(contadorReducer(30,resetAction));
