import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true,
      currentImage: 0
    };
  }
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  };
  gotoImage = (index) => {
    this.setState({
      currentImage: index
    });
  };
  handleClickImage = () => {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  };
  renderGallery() {
    const { images } = this.props;
    console.log('images', images);

    if (!images) return;

    images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item">
          <a className="image fit thumb" href={obj.src} onClick={e => this.openLightbox(i, e)}>
            <img alt="hey" src={obj.thumbnail} />
          </a>

          <h3>{obj.caption}</h3>
          <p>{obj.description}</p>
        </article>
      );
    });

    // return gallery;
  }
  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.shape([]).isRequired
};

export default Gallery;
