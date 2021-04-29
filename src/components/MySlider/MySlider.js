import React from 'react';
import './MySlider.scss';

const MySlider = () => {
  return (
    <div
      id='carouselExampleIndicators'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
      </div>
      <div className='carousel-inner pic'>
        <div className='carousel-item active '>
          <img
            src='https://images.unsplash.com/photo-1615380547241-75c51aad004e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE4MzQxNjU4&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
            className='d-block w-100 '
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1599639900107-5096cd83c55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5NjkxNDE2&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
            className='d-block w-100 '
            alt='...'
          />
        </div>
        <div className='carousel-item'>
          <img
            src='https://images.unsplash.com/photo-1520520544506-d06b4b9dfd93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE5NjkxNDU0&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
            className='d-block w-100 '
            alt='...'
          />
        </div>
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default MySlider;
