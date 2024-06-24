import React from 'react';
import { FooterImageUrl } from '../../../config.js';

const FooterImages = () => {
    return (
        <>
            {
                FooterImageUrl.map((image) => (
                    <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                        <div key={image.id} className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-ripple-color="light">
                            <img src={image.url} className="w-100" alt={`City ${image.id}`} />
                            <a href="#!">
                                <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                            </a>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default FooterImages;
