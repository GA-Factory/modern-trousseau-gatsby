import React from 'react';
import image1 from '../../assets/images/Flowing-dress.png';
import image2 from '../../assets/images/Making-of-dress.png';
import image3 from '../../assets/images/store-front.png';
import PinkButton from '../../components/Button/Button'

import './Hero.css'


const imgUrls = [
    {
        imageUrl: image1,
        title: "Designed & Made with Love",
        paragraph: "French & Italian laces and silks...",
        linkDestination: <a href="https://google.com"><PinkButton
        label="Browse Now"
        fontsize={`${"14px"}`}
        weight={`${"bold"}`}
        height={`${"22px"}`}
        padding={`${"5px 0"}`}
        width={`${"88px"}`}
        desktopwidth={`${"126px"}`}
        family={`${"'Sahitya'"}`}
        color={`${"#441F0E"}`}/></a>,
        index: 0
    },
    {
        imageUrl: image2,
        title: "Tailored to You",
        paragraph: "An in-person experience will give you...",
        linkDestination: <PinkButton
        label="Book Now"
        fontsize={`${"14px"}`}
        weight={`${"bold"}`}
        height={`${"22px"}`}
        padding={`${"5px 0"}`}
        width={`${"88px"}`}
        desktopwidth={`${"126px"}`}
        family={`${"'Sahitya'"}`}
        color={`${"#441F0E"}`}
      />,
        index: 1
    },
    {
        imageUrl: image3,
        title: "Flagship Boutiques",
        paragraph: "Exclusively shop our gowns...",
        linkDestination: <PinkButton
        label="Visit Us"
        fontsize={`${"14px"}`}
        weight={`${"bold"}`}
        height={`${"22px"}`}
        padding={`${"5px 0"}`}
        width={`${"88px"}`}
        desktopwidth={`${"126px"}`}
        family={`${"'Sahitya'"}`}
      />,
        index: 2
    },
];

class Carousel extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {
            currentImageIndex: 0
        };
        
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }
    
    previousSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
        
        this.setState({
            currentImageIndex: index
        });
    }
    
    nextSlide () {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    
    render () {
        return (
            
            <div className="carousel">
                <Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
                <div className="image-car">
                <ImageSlide url={ imgUrls[this.state.currentImageIndex].imageUrl }/>
                    <div className="image-footer">
                    <div className="image-text">
                    <p className="title">{ imgUrls[this.state.currentImageIndex].title }</p>
                    <p className="text-below">{ imgUrls[this.state.currentImageIndex].paragraph }</p>
                    </div>
                    <PinkButton label={imgUrls[this.state.currentImageIndex].linkDestination}/>
                    </div>
                    </div>
                <Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div 
        className={ `slide-arrow ${direction}` } 
        onClick={ clickFunction }>
        { glyph } 
    </div>
);

const ImageSlide = ({ url }) => {
    const styles = {
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: 'center',
    };
    
    return (
        <div className="image-slide" style={styles}></div>
    );
}

export default Carousel