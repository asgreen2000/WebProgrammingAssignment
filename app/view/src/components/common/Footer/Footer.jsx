import './footer.css'

function Footer() {

    return (
        <div id="footer" className="d-flex align-items-end">
            <div className="footer">
                <div className="head-footer">
                    <div className="row p-3">
                        <div className="col sulogan">
                            <h4>
                                BuyMeFirst
                            </h4>
                            <p>
                                Điểm 10 Cho Sự Chất Lượng. Điểm 11 cho sự uy tín. Buy me first luôn bên bạn.
                            </p>
                        </div>
                        <div className="col footer-about">
                            <h4>
                                About
                            </h4>
                            <ul className="box ">
                                <li><a href="/">Product</a></li>
                                <li><a href="/blogs">Blog</a></li>
                                <li><a href="/news">News</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>
                                Legal</h4>
                            <ul className="box">
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms of Use</a></li>
                                <li><a href="/">Contract</a></li>
                            </ul>

                        </div>
                        <div className="col footer-more-info">
                            <h4>More Infomation</h4>
                            <div className="row">
                                <div className="col-7">
                                    <input type="text" className="form-control" placeholder="Enter your email" />

                                </div>
                                <div className="col-4">
                                    <button className>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer mb-4">
                    <p>
                        All rights reserved by &copy; CompanyName 2021
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