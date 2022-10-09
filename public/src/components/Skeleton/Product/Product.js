import React from "react";
import ContentLoader from "react-content-loader";
import './Product.scss';

const MyLoader = () => (
    <ContentLoader className="skeleton-card"
        speed={2}
        viewBox="0 0 290 390"
        backgroundColor="#BDBDBD"
        foregroundColor="#E0E0E0"
        style={{ textAlign: 'center' }}
    >
        <rect x="19%" y="15%" rx="8" ry="8" width="62%" height="180" />
        <rect x="18%" y="72%" rx="8" ry="8" width="170" height="24" />
        <rect x="18%" y="84%" rx="8" ry="8" width="80" height="20" />
    </ContentLoader>
)

export default MyLoader
