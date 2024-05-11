import { useRoutes } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes'
export const App = () =>{
  let element = useRoutes(routes);
  return(
    <>
    {element}
    <Toaster position='top-center' reverseOrder={false}/>
    </>
  )
}
