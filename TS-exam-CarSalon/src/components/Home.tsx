import React from 'react';
import { Carousel } from 'antd';


const contentStyle: React.CSSProperties = {
    margin: 0,

    color: '#fff',

    textAlign: 'center',
    background: '#364d79',
  };

  

  const Home: React.FC = () => (
    <>
    <h1 className='titleHome'>CAR DELUXE IS HERE!</h1>
    <hr />
    <br />
      <Carousel className='carHome' arrows dotPosition="left" infinite={false}>
        <div className='carHome'>
          <img src="https://content.api.news/v3/images/bin/125d42b27b2ea7742d510a5b0d1745a6" alt=""  width={'100%'}/>
        </div>
        <div>
        <img src="https://cimg1.ibsrv.net/ibimg/hgm/1920x1080-1/100/949/next-generation-jaguar-ev-prototype_100949085.jpg" alt=""  width={'100%'}/>
        </div>
        <div>
        <img src="https://cdn.whichcar.com.au/assets/w_3000/a672141d/2025-ldv-terron-9-ute-testing-3x2-27.jpg" alt=""  width={'100%'}/>
        </div>
        <div>
        <img src="https://www.lifewire.com/thmb/aVAgtWpzQan_exBxBHV1b7tcL-0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/apple-logo-steering-wheel-25522ee2c5664139948ebfd1cb1df653.jpg" alt=""  width={'100%'}/>
        </div>
      </Carousel>
    
    </>
  );

  export default Home;