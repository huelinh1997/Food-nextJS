import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

function MainLayout({
  children,
  className,
  typeHeader,
  isHeaderSearch,
  textHeader,
}) {
  return (
    <div className={`layout-container ${className}`}>
      <Container>
        <div
          className={`layout-header d-flex ${
            isHeaderSearch ? '' : 'justify-content-between'
          } `}
        >
          {typeHeader === 'cart' && (
            <>
              <span className="icon icon-menu" />
              <span className="icon icon-cart" />
            </>
          )}
          {typeHeader === 'normal' && (
            <>
              <span className="icon icon-chevron-left" />
              <span className={`${isHeaderSearch ? 'p-l-44' : ''}`}>
                {textHeader}
              </span>
              <span className="icon " />
            </>
          )}
          {typeHeader === 'heart' && (
            <>
              <span className="icon icon-chevron-left" />
              <span className="icon icon-heart" />
            </>
          )}
        </div>
      </Container>
      <Container>
        <div className={`layout-main ${className}`}>{children}</div>
      </Container>
    </div>
  );
}

MainLayout.propTypes = {
  typeHeader: PropTypes.string,
  className: PropTypes.string,
  textHeader: PropTypes.string,
};
MainLayout.defaultProps = {
  typeHeader: 'normal',
  className: '',
  textHeader: '',
};

export default MainLayout;
