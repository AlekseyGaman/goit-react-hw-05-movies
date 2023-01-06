import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <ThreeDots
        color="#212121"
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{ justifyContent: 'center' }}
      />
    </>
  );
};

export default Loader;
