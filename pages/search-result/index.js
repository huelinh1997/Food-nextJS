import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import MainLayout from '../../components/MainLayout';
import Card from '../../components/Card';

function SearchResult() {
  return (
    <MainLayout isHeaderSearch className="px-0" textHeader="abchbf">
      <div className="search-result px-34">
        <>
          <h1 className="head-title font-weight-bold text-center p-t-35">
            Found 6 results
          </h1>
          <div className="search-products p-t-85 p-b-40">
            <Row>
              <Col>
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
              </Col>

              <Col className="p-t-54">
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
                <div className="search-products-card">
                  <Card className="card-image-small" />
                </div>
              </Col>
            </Row>
          </div>
        </>
      </div>
    </MainLayout>
  );
}

SearchResult.propTypes = {};
SearchResult.defaultProps = {};

export default SearchResult;
