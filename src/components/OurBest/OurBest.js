import './OurBest.scss';

const OurBest = () => {
    return (
        <div className="best">
            <div className="container">
                <div className="best__title">Our best</div>
                <div className="best__cards">
                    <div className="best__card">
                        <img src="../../resourses/img/card_1.png" alt="card" className="card__img" />
                        <div className="card__descr">Solimo Coffee Beans 2 kg</div>
                        <div className="card__price">10.73$</div>
                    </div>
                    <div className="best__card">
                        <img src="" alt="" className="card__img" />
                        <div className="card__descr">Presto Coffee Beans 1 kg</div>
                        <div className="card__price">15.99$</div>
                    </div>
                    <div className="best__card">
                        <img src="" alt="" className="card__img" />
                        <div className="card__descr">AROMISTICO Coffee 1 kg</div>
                        <div className="card__price">6.99$</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurBest;