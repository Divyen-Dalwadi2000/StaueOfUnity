import React from 'react';
import { FooterImageUrl } from '../../config.js';

const FooterImages = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    FooterImageUrl.map((image) => (
                        <div key={image.id} className="col-lg-2 col-md-4 col-sm-6 mb-4">
                            <div className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-ripple-color="light">
                                <img src={image.url} className="w-100" alt={`City ${image.id}`} />
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FooterImages;
