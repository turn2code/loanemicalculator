import { Image } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';

const Simple = ({ onDone }) => {
  return (
    <Onboarding
      onSkip={onDone}      // Skip button
      onDone={onDone}      // Done button
      showSkip={true}      // Display Skip
      pages={[
        {
          backgroundColor: '#F0F4F8',
          image: <Image source={require('./assets/2.png')} />,
          title: 'Unlock Your Financial Potential!',
          subtitle: 'Seamlessly manage your finances and make smarter decisions with our intuitive tools.',
        },
        {
          backgroundColor: '#D6E4F0',
          image: <Image source={require('./assets/3.png')} />,
          title: 'Smart EMI Solutions at Your Fingertips',
          subtitle: 'Easily calculate EMIs, compare loans, and plan your repayments with precision.',
        },
        {
          backgroundColor: '#A2CCF2',
          image: <Image source={require('./assets/4.png')} />,
          title: 'Ready to Achieve Your Goals?',
          subtitle: 'Dive in now and start your journey towards financial freedom and clarity.',
        },
      ]}
    />
  );
};

export default Simple;
