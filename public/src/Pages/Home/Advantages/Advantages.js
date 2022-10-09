import React from 'react';
import './Advantages.scss';
import CargoIcon from '../../../images/cargo.svg';
import CreditIcon from '../../../images/credit.svg';
import WarrantyIcon from '../../../images/warranty.svg';

const Advantages = () => {
    return (
        <div className="advantages">
            <div className="item">
                <img src={CargoIcon} alt="cargo" />
                <div className="title">Çatdırılma</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
            </div>
            <div className="item">
                <img src={CreditIcon} alt="cargo" />
                <div className="title">Kredit</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
            </div><div className="item">
                <img src={WarrantyIcon} alt="cargo" />
                <div className="title">Zəmanət</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
            </div>
        </div>
    )
}

export default Advantages