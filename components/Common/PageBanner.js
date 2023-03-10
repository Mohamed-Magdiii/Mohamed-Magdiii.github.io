import React from 'react';
import Link from 'next/link';
import logo from '../../public/images/logo.png'
const PageBanner = ({pageTitle, homePageUrl, homePageText, activePageText}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li className="active">{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;