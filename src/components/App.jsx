import React, {useState, useEffect} from "react";

//components
import Card from "./Card.jsx";

//api
import api from "../utils/api.js";

const App = () => {
    const [data, setData] = useState(null);

    const getData = async () => {
        const response = await api.getData();
    }

    useEffect(() => {
        getData()
    },[])

    return(
        <div className="About">
            <Card/>
        </div>
    )
}

export default App;