import React from 'react';

import { Avocado } from '@components/SVGIcons';

type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
}

const AnimatedHeader = ({ visible, onClick }: AnimatedHeaderProps) => (
  <h1
    className="text-3xl flex items-center justify-center text-center font-semibold"
    onClick={onClick}
  >
    Platzi
    <Avocado size="58px" className={visible ? 'animate-jiggle' : ''} />
    Avo
  </h1>
);

export default AnimatedHeader;
