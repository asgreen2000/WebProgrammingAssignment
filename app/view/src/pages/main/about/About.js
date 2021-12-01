

const About = props => {



    
    return (

        <>

            <header class="py-5">
                <div class="container px-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-xxl-6">
                            <div class="text-center my-5">
                                <h1 class="fw-bolder mb-3">SỨ MỆNH CỦA CHÚNG TÔI LÀ ĐEM ĐẾN NHỮNG SẢN PHẨM TỐT NHẤT CHO NGƯỜI TIÊU DÙNG </h1>
                                {/* <p class="lead fw-normal text-muted mb-4">

                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of type and scrambled it to make a type 
                                 specimen book
                                </p> */}
                                <a class="btn btn-primary btn-lg" href="#scroll-target">ĐỌC TIỂU SỬ CỦA CHÚNG TÔI</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        <section class="py-5 bg-light" id="scroll-target">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png"/></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">ĐƯỢC THÀNH LẬP 2021</h2>
                            <p class="lead fw-normal text-muted mb-0">
                                KẾT QUẢ CỦA VIỆC NGÀY ĐÊM SAY SƯA VỚI MÔN LẬP TRÌNH WEB 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
           
            <section class="py-5">
                <div class="container px-5 my-5">
                    <div class="row gx-5 align-items-center">
                        <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="https://cdn.tgdd.vn/Products/Images/44/251426/laptop-gigabyte-gaming-g5-i5-5s11130sh-1.jpg" alt="..." /></div>
                        <div class="col-lg-6">
                            <h2 class="fw-bolder">HỆ THỐNG CHUYÊN BÁN NHỮNG LAPTOP HOT NHẤT HIỆN NAY</h2>
                            <p class="lead fw-normal text-muted mb-0">
                            Tác chiến trên mọi chiến trường ảo một cách đầy thuận lợi cùng laptop GIGABYTE Gaming G5 i5 (5S11130SH), với kiểu dáng mạnh mẽ cùng hiệu năng tân tiến, sẵn sàng đồng hành cùng bạn ở bất kỳ đâu.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
           
            <section class="py-5 bg-light">
                <div class="container px-5 my-5">
                    <div class="text-center">
                        <h2 class="fw-bolder">ĐỘI NGŨ BÊN CHÚNG TÔI</h2>
                        <p class="lead fw-normal text-muted mb-5">Cống hiến hết mình vì xã hội</p>
                    </div>
                    <div class="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" alt="..." />
                                <h5 class="fw-bolder">Lê Bảo Khánh</h5>
                                <div class="fst-italic text-muted">Nhóm trưởng</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-xl-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" alt="..." />
                                <h5 class="fw-bolder">PHAN VŨ HOÀNG HIẾU</h5>
                                <div class="fst-italic text-muted">THÀNH VIÊN</div>
                            </div>
                        </div>
                        <div class="col mb-5 mb-5 mb-sm-0">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" alt="..." />
                                <h5 class="fw-bolder">BÙI HỮU TIẾN ĐẠT</h5>
                                <div class="fst-italic text-muted">THÀNH VIÊN</div>
                            </div>
                        </div>
                        <div class="col mb-5">
                            <div class="text-center">
                                <img class="img-fluid rounded-circle mb-4 px-4" src="https://upload.wikimedia.org/wikipedia/commons/d/de/HCMUT_official_logo.png" alt="..." />
                                <h5 class="fw-bolder">NGUYỄN THÀNH LUÂN</h5>
                                <div class="fst-italic text-muted">THÀNH VIÊN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;