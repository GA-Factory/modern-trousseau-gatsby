import React from "react";
import ReactDOM from "react-dom";
import "./CollectionList.css";

const Slide = ({ property }) => {
  const { title, imga, imgb, labela, labelb, index } = property;
  return (
    <div id={`slide-${index}`} className="slide">
      <div className="slide-container">
        <div className="image-1">
          <img src={imga} className="slide-img" />
          <p className="slide-text">{`${labela}`}</p>
        </div>
        <div className="image-2">
          <img src={imgb} className="slide-img" />
          <p className="slide-text">{`${labelb}`}</p>
        </div>
      </div>
    </div>
  );
};

class CollectionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: this.props.slideData,
      property: this.props.slideData[0]
    };
  }

  prevProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == 0) {
      const newIndex = this.props.slideData.length - 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
  };

  nextProperty = () => {
    if (this.state.property.index >= 0) {
      const newIndex = this.state.property.index + 1;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
    if (this.state.property.index == this.props.slideData.length - 1) {
      const newIndex = 0;
      this.setState({
        property: this.props.slideData[newIndex]
      });
    }
  };

  render() {
    const { properties, property } = this.state;
    return (
      <div>
        <div className="card">
          <button className="button" onClick={() => this.prevProperty()}>
          <p className='button-icon'>&#10094;</p>
          </button>
          <div className="slide">
            <Slide property={property} />
          </div>
          <button className="button" onClick={() => this.nextProperty()}>
            <p className='button-icon'>&#10095;</p>
          </button>
        </div>
      </div>
    );
  }
}

export default CollectionList;