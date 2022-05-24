import { useState } from "react";
import axios from "axios";
const App = () => {
    // const header = { headers: { "Access-Control-Allow-Origin": "*" } };
    const [city, setCity] = useState("");
    const handleSubmit = (e) => {
        console.log("called");
        e.preventDefault();
        axios
            .post("http://localhost:8000/get",{city:city},{headers: {"Access-Control-Allow-Origin":"*"}},)
            .then((res) => console.log(res))
            .catch((e) => console.log(e.message));
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
                type="text"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                }}
            />
            <button type="submit">get</button>
        </form>
    );
};
export default App;
