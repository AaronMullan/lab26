import React, { Component } from 'react';
import styles from './App.css';
import PropTypes from 'prop-types';

export default class Character extends Component { 
  static propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    status: PropTypes.string,
    species: PropTypes.string,
    gender: PropTypes.string,
    origin: PropTypes.string,
    location: PropTypes.string,
  }
  render() {
    const { img, alt, name, id, status, species, gender, origin, location } =  this.props;
    return (
      <article className={styles.characterCard__Wrapper}>
        <div data="card header" className={styles.characterCard__Header}>
          <div className="card-image"><img src={img} alt={alt}></img>
          </div>
          <div className="characterCard__Title">
            <h2 className="characterCard__Name">{name}</h2>
            <p className="characterCard__Description-sc-1ejywvi-5 dSyDU">id: {id}</p>
          </div>
        </div>
        <div data="card info" className={styles.characterCard__InfoWrapper}>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>STATUS</span><p>{status}</p></div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>SPECIES</span><p>{species}</p></div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>GENDER</span><p>{gender}</p></div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 kYFLaT">
            <span>ORIGIN</span><p>{origin}</p></div>
          <div className="characterCard__TextWrapper-sc-1ejywvi-6 jCIRLJ">
            <span>LAST LOCATION</span><p>{location}</p>
          </div>
        </div> 
      </article>
    );
  }
}
