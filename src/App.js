
import { Fragment } from 'react';
import createGenerateClassName, { JssProvider } from 'react-jss';
import Router from "../src/routers/Router";
console.log(createGenerateClassName);

const generateClassName = createGenerateClassName()


function App() {
  return (
    <Fragment>
         <JssProvider generateClassName={generateClassName}>
          <Router></Router>
         </JssProvider>      
    </Fragment>
  );
}

export default App;
