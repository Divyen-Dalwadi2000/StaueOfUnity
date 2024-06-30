import { sou } from "../../../config";
import { ImageUrl } from "../../../config";

const Card = (
    {
        bundleImages,
        title,
        description,
        bundleVenues
    }
) => {
    return (
        <div className="container">
            {/* {console.log(sou)} */}
            <div className=" card mb-3 mt-5 shadow" style={{ maxWidth: '1100px' }}>
                <div className="row no-gutters mb-2 d-flex align-items-center justify-content-center">
                    <div className="col-md-2 m-2 ">
                        {bundleImages.map((image, index) => (
                            <img key={index} src={ImageUrl + image.fileBlobId}
                                className="card-img img-fluid"  // Add img-fluid for responsive images
                                alt={`Card Image ${index}`}
                                style={{ maxWidth: '100%', height: 'auto' }}  // Optional: CSS for more control over image size
                            />
                        ))}
                        {/* {console.log(bundleImage[0])} */}
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            {/* {<p className="card-text"><small className="text-muted">Attraction : {bundleVenues.map(e => e.event.dispayName)}</small></p>} */}
                            {/* { <p className="card-text"><small className="text-muted">Attraction : {sou[0].bundleVenues[0].event.displayName}</small></p> } */}
                            {/* <p className="card-text"><small className="text-muted">Attraction :
                                {bundleVenues.map(bv => bv?.event?.dispayName)}
                            </small></p> */}
                        </div>
                    </div>

                    <div className="col-md-2 d-flex align-items-center justify-content-center">
                        <button className="btn btn-success">Book</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 