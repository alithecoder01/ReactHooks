import {useContext} from 'react'
import { AppContext } from './Context';



export const Login = () => {

    const {setUserName} = useContext(AppContext)
  return (
    <div className="Login">
      <input
        type="text"
        placeholder="Enter Username"
        onChange={(event) => {
          setUserName(event.target.value)
        }}
      />
    </div>
  );
};

