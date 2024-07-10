import Card from "./Card";
import { sou } from "../../config";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const Body = () => {
    const [searchList, setSearchList] = useState("");
    const [allDataList, setAllDataList] = useState([]);
    const [filterDataList, setFilterDataList] = useState([]);

    function filterData(searchList, all) {
        const fData = all.filter((data) => data?.title?.toLowerCase()?.includes(searchList.toLowerCase()));
        // console.log(fData);
        setFilterDataList(fData)
    }

    useEffect(() => {
        setAllDataList(sou);
        setFilterDataList(sou);
    }, [])

    return (
        <>
            <div className="flex justify-content-center m-3">
                <input type="text" className="input-group-sm me-3" value={searchList} onChange={(e) => setSearchList(e.target.value)} />
                <Button variant="outline-success" onClick={() => filterData(searchList, allDataList)}>Search</Button>
            </div>
            <div>

                {
                    filterDataList.map((list) => {
                        return <Card key={sou?.id} {...list} />
                    })
                }
            </div>
        </>
    );
}

export default Body;