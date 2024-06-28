import { useRouteError } from "react-router-dom"

const Pagenotfound = () => {

    const error = useRouteError()
    console.log(error);
    return (
        <>
            <div className="text-center">
                <h1 className="text-danger">Oops !!!!</h1>
                <h1 className="text-danger">Something Went Wrong</h1>
                <h1 className="text-danger"> {error.status + " " + error.statusText} </h1>
            </div>
        </>
    )
}

export default Pagenotfound;