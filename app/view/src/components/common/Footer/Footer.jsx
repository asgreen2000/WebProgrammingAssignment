import './footer.css'

function Footer() {

    return (
        <div id="footer" >
            <div className="footer col-10">
                <div className="head-footer">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 sulogan">
                            <h4>
                                BuyMeFirst
                            </h4>
                            <p>
                                Điểm 10 Cho Sự Chất Lượng. Điểm 11 cho sự uy tín. Buy me first luôn bên bạn.
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6 footer-about">
                            <h4>
                                About
                            </h4>
                            <ul className="box ">
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Sales</a></li>
                                <li><a href="/">Service</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6 col-6">

                            <h4>
                                Legal</h4>
                            <ul className="box">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Contract</a></li>
                            </ul>

                        </div>
                        <div className="col-lg-3 col-md-6 footer-contact">
                            <h4>
                                Contacts
                            </h4>
                            <ul className="box ">
                                <li><a href="/"><i class="fas fa-home"></i> <p>Address</p>: Ho Chi Minh </a></li>
                                <li><a href="/"><i class="fas fa-phone-square"></i><p>Phone</p>: 0333666999</a></li>
                                <li><a href="/"><i class="far fa-envelope"></i><p>Email</p>: bmf@gmail.com</a></li>
                                <li><a href="/"><i class="fas fa-fax"></i><p>Fax</p>: 013456234</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-more-info">
                            <h4>More Infomation</h4>
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder="Enter your email" />

                                </div>
                                <div className="col-4">
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <p>
                        All rights reserved by ©CompanyName 2021
                    </p>
                    <div className="footer-icon">
                        <i class="fab fa-facebook-square" style={{ color: '#3b5998' }}></i>
                        <i class="fab fa-twitter-square" style={{ color: '#1DA1F2' }}></i>
                        <i class="fab fa-pinterest-square" style={{ color: '#E60023' }}></i>
                        <i class="fab fa-instagram-square" style={{ color: '#F56040' }}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer