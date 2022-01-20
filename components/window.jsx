import * as React from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions';

const Window = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height}
    </div>
  );
}