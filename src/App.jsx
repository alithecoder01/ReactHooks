import { Effect } from "./component/Effect";
import { Reducer } from "./component/Reducer";
import State from "./component/State";

export default function App(){
    return(
        <div>
            <State/>
            <hr />
            <Reducer/>
            <hr />
            <Effect/>

        </div>
    )
}

