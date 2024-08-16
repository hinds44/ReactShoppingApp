function IntroComponent() {
    return (
        <div className="text-center">

            <h1>Welcome!</h1>
            <h2>The first shopping cart.</h2>
            <p className="h3">&nbsp;</p>

            <div className="row">
                <div className="mx-auto col-sm-8">
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Massa sed vulputate
                    luctus scelerisque luctus fringilla etiam. Consectetur aliquam ipsum
                    torquent feugiat hac lectus libero. Euismod molestie congue auctor litora
                    pulvinar parturient. Molestie senectus suspendisse sapien, magnis massa
                    accumsan. Mus condimentum quisque praesent, parturient nullam volutpat
                    enim malesuada.</p>
                </div>
            </div>

            <p className="h5">&nbsp;</p>
            <a className="btn btn-success" href="/products">Shop Now</a>
        </div>
    );
}

export default IntroComponent;