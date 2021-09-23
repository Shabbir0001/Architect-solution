import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import client from '../../../Images/client.PNG';
import './Quotes.css';


const Quotes = () => {
    return (
        <div className="quotes-container">
            <Carousel 
            autoplay={true}
            emulateTouch={true}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            stopOnHover={true}
            infiniteLoo={true}
            >
                    <div className="container-carousel">
                        <div className="container-innerCarousel">
                        <img src={client} alt="" />
                        <p>Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfh </p>
                        <small>Architect Solution</small>
                        </div>
                    </div>
                    <div className="container-carousel">
                        <div className="container-innerCarousel">
                        <img src={client} alt="" />
                        <p>Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfh </p>
                        <small>Architect Solution</small>
                        </div>
                    </div>
                    <div className="container-carousel">
                        <div className="container-innerCarousel">
                        <img src={client} alt="" />
                        <p>Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio Lorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfhLorem ipsum dolor suift blak usfh lkji lskks fshlkjs skdj amai ksdh; sljdio skdjfh </p>
                        <small>Architect Solution</small>
                        </div>
                    </div>
                </Carousel>
        </div>
    );
};

export default Quotes;