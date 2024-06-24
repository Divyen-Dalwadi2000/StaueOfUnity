import FooterImages from "./FooterImages";
const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center">
                {/* Grid container */}
                <div className="container p-4">
                    {/* Section: Images */}
                    <section>
                        <div className="row">
                            {/* <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div className="bg-image hover-overlay shadow-1-strong rounded" data-mdb-ripple-init data-ripple-color="light">
                                    <img src="https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D" className="w-100" alt="City 1" />
                                    <a href="#!">
                                        <div className="mask" style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                                    </a>
                                </div>
                            </div> */}

                            <FooterImages />
                        </div>
                    </section>
                    {/* Section: Images */}
                </div>
                {/* Grid container */}

                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright : &nbsp; &nbsp;
                    <a className="text-body" href="https://www.fernwehvacations.com/">fernwehvacations.com</a>
                </div>
                {/* Copyright */}
            </footer>
        </>
    )
}


export default Footer;