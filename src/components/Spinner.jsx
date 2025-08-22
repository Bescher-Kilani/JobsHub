import React from 'react';
import { PropagateLoader } from "react-spinners";

const override = {
    display:'block',
    margin:'100px auto'
}

const Spinner = ({loading}) => {
  return (
      <PropagateLoader
          color='#134fe6'
          cssOverride={override}
          loading={ loading }
          size={150}
      />
  );
};

export default Spinner;
