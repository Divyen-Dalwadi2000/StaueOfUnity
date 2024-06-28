import { Button } from "react-bootstrap";
import { useState } from "react";

const Search = () => {
    const [ searchList , setSearchList ] = useState("");

    return(
        <div className="flex justify-content-center ">
            <input type="text" className="input-group-sm me-3" onChange={(e) => setSearchList(e.target.value)} />
            <Button variant="outline-success" onClick={()=> filterdata(searchList)}>Search</Button>
            {/* <p>{searchList}</p> */}
        </div>
    )
}

export default Search;