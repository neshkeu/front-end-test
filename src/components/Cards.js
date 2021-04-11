import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h2>Preporučujemo</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img1.jpg'
              text='BERT TV REGAL'
              label='REGALI'
              path='/contact'
            />
            <CardItem
              src='images/img2.jpg'
              text='DURO TV REGAL'
              label='REGALI'
              path='/products'
            />
            <CardItem
              src='images/img3.jpg'
              text='KUHINJE PO ELEMENTIMA'
              label='SYCYLIA KUHINJA'
              path='/sign-up'
            />
            <CardItem
              src='images/img4.jpg'
              text='KUHINJE PO ELEMENTIMA'
              label='PROWANSJA KUHINJA'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
