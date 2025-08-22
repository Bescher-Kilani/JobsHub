import React from 'react';
import { PropagateLoader } from "react-spinners";

const override = {
    display: 'flex',
    justifyContent: 'center',
    margin:'100px auto'
}

const Spinner = ({loading}) => {
  return (
      <PropagateLoader
          color='#134fe6'
          cssOverride={override}
          loading={ loading }
          size={15}
          speedMultiplier={1}
      />
  );
};

export default Spinner;
