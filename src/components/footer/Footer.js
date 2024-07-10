import FooterImages from "./FooterImages";
const Footer = () => {
    return (
        <>
            <footer className="bg-body-tertiary text-center">
                <div className="container p-4">
                    <section>
                        <div className="row">
                            <FooterImages />
                        </div>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright : &nbsp; &nbsp;
                    <a className="text-body" href="https://www.fernwehvacations.com/">fernwehvacations.com</a>
                </div>
            </footer>
        </>
    )
}


export default Footer;