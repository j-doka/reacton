import * as React from 'react'
import useWindowDimensions from '../hooks/useWindowDirections';

const Window = () => {
  const { height, width } = useWindowDimensions();

  return (
    {
      width,
      height
    }
  );
}

export default Window