import './index.css'



function Slider({title}){

return (
    <div id="myCarousel" className="carousel slide carousel-fade" data-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <div className="mask flex-center">
                <div className="container">
                    <div className="row align-items-center" style={{height:'550px'}}>
                        <div className="col-md-7 col-12">
                            <h4>{title}</h4>
                            <p>This has many features that are simply awesome. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis quos at hic repudiandae minus asperiores, mollitia quidem blanditiis tempora est sunt vel temporibus error unde molestiae eum. Fuga, mollitia quod.</p>
                             <a href='#readmore' >Read More</a>
                        </div>
                        <div className="col-md-5 col-12"><img src="https://i.imgur.com/iDwDQ4o.png"  alt="slide"/></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
</div>
)
}

export default Slider;