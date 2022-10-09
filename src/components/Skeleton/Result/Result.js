import React from "react";
import ContentLoader from "react-content-loader";
import './Result.scss';

const MyLoader = () => (
    <ContentLoader className="result-item"
        speed={2}
        backgroundColor="#BDBDBD"
        foregroundColor="#E0E0E0"
        style={{ textAlign: 'center' }}
    >
        <rect x="0" y="0" rx="5" ry="5" width="64" height="64" />
        <rect x="80" y="5" rx="5" ry="5" width="185" height="16" />
        <rect x="80" y="45" rx="5" ry="5" width="140" height="12" />
    </ContentLoader>
)

export default MyLoader
