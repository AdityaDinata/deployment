import React from 'react';

const Icon = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="w-16 h-16 mx-auto">
        <svg width="72" height="57" viewBox="0 0 72 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_405_4737)">
            <path d="M8.12608 7.44912C7.99112 3.57368 11.0106 0 15.092 0H56.9133C60.9947 0 64.0142 3.57368 63.8792 7.44912C63.7496 11.1719 63.9179 15.9942 65.1315 19.9263C66.3491 23.8704 68.4022 26.3635 71.7648 26.6838V30.3162C68.4022 30.6365 66.3491 33.1296 65.1315 37.0737C63.9179 41.0058 63.7496 45.8281 63.8792 49.551C64.0142 53.4263 60.9947 57 56.9133 57H15.092C11.0106 57 7.99112 53.4263 8.12622 49.551C8.25573 45.8281 8.08738 41.0058 6.87362 37.0737C5.65622 33.1296 3.59807 30.6365 0.235352 30.3162V26.6838C3.59793 26.3635 5.65622 23.8704 6.87362 19.9263C8.08738 15.9942 8.25573 11.1719 8.12608 7.44912Z" fill="url(#paint0_linear_405_4737)"/>
            <g filter="url(#filter0_d_405_4737)">
              <path d="M37.5512 43.6521C44.1588 43.6521 48.1406 40.4168 48.1406 35.0805C48.1406 31.0467 45.2995 28.1265 41.081 27.6642V27.4961C44.1803 26.9919 46.6125 24.1137 46.6125 20.8993C46.6125 16.3194 42.9966 13.3359 37.4866 13.3359H25.0891V43.6521H37.5512ZM29.9104 17.1806H36.3244C39.8112 17.1806 41.7912 18.7353 41.7912 21.5505C41.7912 24.5549 39.4883 26.2355 35.3128 26.2355H29.9104V17.1806ZM29.9104 39.8075V29.8282H36.2812C40.8442 29.8282 43.2118 31.5089 43.2118 34.7864C43.2118 38.0637 40.9088 39.8075 36.5611 39.8075H29.9104Z" fill="url(#paint1_linear_405_4737)"/>
              <path d="M37.5512 43.6521C44.1588 43.6521 48.1406 40.4168 48.1406 35.0805C48.1406 31.0467 45.2995 28.1265 41.081 27.6642V27.4961C44.1803 26.9919 46.6125 24.1137 46.6125 20.8993C46.6125 16.3194 42.9966 13.3359 37.4866 13.3359H25.0891V43.6521H37.5512ZM29.9104 17.1806H36.3244C39.8112 17.1806 41.7912 18.7353 41.7912 21.5505C41.7912 24.5549 39.4883 26.2355 35.3128 26.2355H29.9104V17.1806ZM29.9104 39.8075V29.8282H36.2812C40.8442 29.8282 43.2118 31.5089 43.2118 34.7864C43.2118 38.0637 40.9088 39.8075 36.5611 39.8075H29.9104Z" stroke="white" strokeWidth="0.139706"/>
            </g>
          </g>
          <defs>
            <filter id="filter0_d_405_4737" x="22.784" y="11.5896" width="27.6618" height="34.9264" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="0.558824"/>
              <feGaussianBlur stdDeviation="1.11765"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_405_4737"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_405_4737" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_405_4737" x1="10.864" y1="1.50855" x2="73.3686" y2="51.1247" gradientUnits="userSpaceOnUse">
              <stop stopColor="#9013FE"/>
              <stop offset="1" stopColor="#6610F2"/>
            </linearGradient>
            <linearGradient id="paint1_linear_405_4737" x1="27.2695" y1="15.3314" x2="41.2409" y2="38.9601" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="#F1E5FC"/>
            </linearGradient>
            <clipPath id="clip0_405_4737">
              <rect width="71.5294" height="57" fill="white" transform="translate(0.235352)"/>
            </clipPath>
          </defs>
        </svg>
      </div>

      <br />
      <h2 className="text-[31px] font-[500] leading-[38.4px] text-center" style={{ fontFamily: 'Roboto' }}>
        <b>Create Product</b>
      </h2>
      <p className="text-center text-lg font-light" style={{ color: '#212529', fontFamily: 'Roboto' }}>
        Below is an example form built entirely with Bootstrap form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.
      </p>
    </div>
  );
};

export default Icon;
