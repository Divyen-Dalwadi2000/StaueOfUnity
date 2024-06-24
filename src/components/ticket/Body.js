import Card from "./Card";
import { sou } from "../../../config";

const Body = () => {
    return (
        <>
            {
                sou.map((list)=> {
                    return <Card key={sou.id} {...list} />
                })
            }
        </>
    );
}

export default Body;