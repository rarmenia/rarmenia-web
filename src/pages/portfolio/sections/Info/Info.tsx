import ComponentViewIntersection from '@components/providers/ComponentViewIntersection';
import BusinessCard from './BusinessCard';



const Info = () => {

  return (
    <div id='about' className='w-screen grid place-items-center'>

      <ComponentViewIntersection>
        {({ isVisible }) =>
          <BusinessCard isVisible={isVisible} />
        }
      </ComponentViewIntersection>
    </div>
  );
};

export default Info;
