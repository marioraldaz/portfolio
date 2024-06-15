import React from 'react';
import TranslucidDiv from './TranslucidDiv';

const Description: React.FC = () => {
  return (
    <div className="description w-4/5 self-center text-center">
      <TranslucidDiv title={'roleTitle'} paragraphs={['role']} />

      <TranslucidDiv
        title={'technologies.title'}
        paragraphs={['technologies.languages']}
      />
    </div>
  );
};

export default Description;
