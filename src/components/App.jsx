import React, {useState, useEffect} from "react";

//components
import Card from "./Card.jsx";

//api
import api from "../utils/api.js";

const App = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    //Get data
    const getData = async () => {
        setLoading(true);
        const response = await api.getData();
        if(response !== false){
            setData(response[0]);
            setLoading(false);
        }
    }

    useEffect(() => {
        getData()
    },[])

    /*Loading state*/
    if(loading){
        return (
            <div className="About">
                <h1 style={{textAlign: "center"}}>Loading ...</h1>
            </div>
        )
    }

    /*Default state*/
    return(
        <div className="About">
            <Card {...data}/>
        </div>
    )
}

export default App;