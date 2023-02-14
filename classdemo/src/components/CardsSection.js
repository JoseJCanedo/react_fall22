//https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/dist/index.html  look for portfolio-item
const CardsSection = () => {
    const image = ["imgUrl1", "imgUrl2"]
    let imageCards = []
    image.forEach( (img, index) => {
        imageCards.push(<div key={index} class="col-md-6 col-lg-4 mb-5">
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                </div>
                <img class="img-fluid" src={img} alt="..." />
            </div>
        </div>)
    })
    return(
        <section class="page-section portfolio" id="portfolio">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    {imageCards}
                </div>
            </div>
        </section>
    )
    
}
export default CardsSection;