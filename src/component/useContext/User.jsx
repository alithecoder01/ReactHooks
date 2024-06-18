import {useContext} from 'react'
import { AppContext } from './Context';

export const User = () => {
    const {UserName} = useContext(AppContext);
  return (
    <div>
      <p>User: {UserName} </p>
    </div>
  );
};
