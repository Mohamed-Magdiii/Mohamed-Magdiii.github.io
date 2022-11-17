import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import Link from '../../utils/ActiveLink';
import { useRouter } from 'next/router';

const TopHeader = () => {
    const router = useRouter()
    const {t} = useTranslation("common")
    const reloadTran = ()=>{
        setTimeout(()=>{
            if(router.locale === "ar"){
                router.reload()
               }
        },200)

      }
    return (
        <div className="top-header-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                        <div className="header-content-left">
                            <p>{t("Welcome To Orient Insurance!")}</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-8 col-sm-6">
                        <ul className="header-content-right">
                            <li>
                                <a href="tel:+822456974">
                                    <i className="bx bx-phone-call"></i>
                                    {t("Call Us For Inquiry")}: +19258
                                </a>
                            </li>

                            <li>
                                <a href="mailto:hello@flexa.com">
                                    <i className="bx bx-envelope"></i>
                                    {t("Email")}: Otic@alfuttaim.com
                                </a>
                            </li>
                            <li>
                            {router.locale === "ar" ? 
                            (<Link  href="/" locale="en">
                              <a onClick={()=>reloadTran()} className="nav-link">
                                En
                              </a>
                            </Link>) : 
                            (<Link  href="/" locale="ar">
                            <a onClick={()=>reloadTran()} className="nav-link">
                              ع
                            </a>
                          </Link>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader;