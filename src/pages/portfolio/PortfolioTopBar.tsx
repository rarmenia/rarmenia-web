import MappedProperty from 'components/processors/MappedProperty';
import ScreenSize from 'components/providers/ScreenSize';
import ScrollPosition from 'components/providers/ScrollPosition';
import React, { } from 'react';


const PortfolioTopBar = () => {
  return (
    <ScrollPosition>
      {(position) => (
        <ScreenSize>
          {(size) => (
            <MappedProperty
              active={[0 + (size.height / 4), size.height - (size.height / 2)]}
              target={[0, 100]}
              current={position}
            >
              {(opacity) => (
                <div
                  style={{ opacity: `${opacity}%` }}
                  className="z-[3000] fixed bg-black/10 backdrop-blur-md w-screen flex flex-col px-8 py-6 text-white">
                  <div className="font-mono"> Rei Armenia </div>
                </div>
              )}
            </MappedProperty>
          )}
        </ScreenSize>
      )}
    </ScrollPosition>
  )
}

export default PortfolioTopBar;
