import React, {useState} from 'react'
import useAxios from './useAxios';
import useMount from './useMount';

function Index() {
    const [state, setState] = useState(0);
    const [loading, data, err] = useAxios('http://localhost:3000/');
    console.log(loading, data, err)

    useMount(() => {
        console.log(state)
    })
    if(loading) {
        return <div>loading</div>
    }
    return (
        <div>
           {err ? 
           <div>{JSON.stringify(err)}</div>:
           <div>{JSON.stringify(data)}</div>}
        </div>
    )
}

export default Index;
