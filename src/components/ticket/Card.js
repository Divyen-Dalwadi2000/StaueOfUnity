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
            <div className="card mb-3 mt-5" style={{ maxWidth: '1100px' }}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        {bundleImages.map((image, index) => (
                            <img key={index} src={ImageUrl + image.fileBlobId} className="card-img" alt={`Card Image ${index}`} />
                        ))}
                        {/* {console.log(bundleImage[0])} */}
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>

                            {<p className="card-text"><small className="text-muted">Attraction : {bundleVenues.map(e => e.event.dispayName)}</small></p>}
                            {/* { <p className="card-text"><small className="text-muted">Attraction : {sou[0].bundleVenues[0].event.displayName}</small></p> } */}
                            <p className="card-text"><small className="text-muted">Attraction :
                                {bundleVenues.map(bv => bv.event.dispayName)}
                            </small></p>
                            <button className="btn btn-success">Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 