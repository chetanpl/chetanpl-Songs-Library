import { Provider } from "react-redux";
import {store} from '../state';
import { Table } from "./Table";
import '../Assets/index.css'
const App = () => {
    return <Provider store={store}>
           <Table/>
         </Provider>
}
export default App;
