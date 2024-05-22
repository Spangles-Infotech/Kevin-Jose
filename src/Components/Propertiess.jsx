
import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import '../Style/Properties.css';
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from 'react-router-dom';
import { GoFilter } from "react-icons/go";
import { IconContext } from 'react-icons';
import { Button } from 'react-bootstrap';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [propertyCount, setPropertyCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [propertytype, setPropertyType] = useState('');
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [pageSize, setPageSize] = useState(10); // Default page size

  useEffect(() => {
    fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=1&page_size=${pageSize}`);
  }, [pageSize]);

  const fetchProperties = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProperties(data.results);
      setPreviousPage(data.previous);
      setNextPage(data.next);
      setPropertyCount(data.count);
      setTotalPages(Math.ceil(data.count / pageSize));
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
      fetchProperties(nextPage); // Fetch next page
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1);
      fetchProperties(previousPage); // Fetch previous page
    }
  };
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=${pageNumber}&page_size=10&search=${search}&page_size=10&propertytype=${propertytype}`);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=1&page_size=10&search=${value}`);
  };
  const handleProperTytype = (value) => {
    setPropertyType(value);
    fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=1&page_size=10&search=${value}`);
  };
  const handleStatus = (value) => {
    if (value !== '') {
      setStatus(value);
      fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=1&page_size=10&status=${value}`);
    } else {
      setStatus('');
      fetchProperties(`http://127.0.0.1:8000/api/basic_properties/?page=1&page_size=10`);
    }
  };

  const handlePageSizeChange = (value) => {
    setPageSize(value);
  };

  const renderPaginationNumbers = () => {
    const maxNumbers = 4;
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxNumbers / 2));
    let endPage = Math.min(totalPages, startPage + maxNumbers - 1);
    if (endPage - startPage < maxNumbers - 1) {
      startPage = Math.max(1, endPage - maxNumbers + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <Link
            className="page-link"
            href="#"
            onClick={() => handlePageClick(i)}
            style={{
              textAlign: 'center',
              marginRight: '5px',
              borderRadius: '50%',
              width: '40px',
              padding: '8px',
              backgroundColor: currentPage === i ? 'red' : 'white',
              color: currentPage === i ? 'white' : 'red',
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pages;
  }
  return (
    <div className='PropertyList'>
      <div className='card' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
        <div className='row m-2 mt-4 mb-4'>
          <div className='col'>
            <h1 className='prop2 '>Properties Registered</h1>
          </div>

          <div className="col d-flex custom-select ">
            <div className='card d-flex m-1' style={{ flexDirection: 'row', height: '30px' }}>
              <IconContext.Provider value={{ className: 'react-icons', size: '1.7em', height: '10px' }} >
                <GoFilter /><span>Filter</span>
              </IconContext.Provider>

            </div>
            <Form.Select onChange={(e) => handleProperTytype(e.target.value)} style={{ width: '200px', height: '40px' }}>
              <option value=''>Property type :</option>
              <option value="factory">Factory	</option>
              <option value="residential_plot">Residential Plot	</option>
              <option value="commercial_plot">Commercial Plot</option>
              <option value="industrial_plot">Industrial Plot</option>
              <option value="residential_land">Residential Land</option>
              <option value="commercial_land">Commercial Land</option>
              <option value="industrial_land">Industrial Land</option>
              <option value="agricultural_land">Agricultural  Land</option>
              <option value="plantation">Plantation</option>
              <option value="estate">Estate</option>
              <option value="farm_land">Farm  Land</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
              <option value="bungalow">Bungalow</option>
              <option value="duplex_house">Duplex House</option>
              <option value="row_house">Row House</option>
              <option value="pent_house">Pent House</option>
              <option value="farm_house">Farm House</option>
              <option value="flat">Flat</option>
              <option value="apartment">Apartment</option>
              <option value="builder_floor_apartment">Builder Floor Apartment</option>
              <option value="multi_storey_apartment">Multi Storey Apartment</option>
              <option value="luxury_apartment">Luxury Apartment</option>
              <option value="studio_apartment">Studio Apartment </option>
              <option value="PG_home">PG Home</option>
              <option value="PG_hostel">PG Hostel</option>
              <option value="office">Office</option>
              <option value="shop">Shop</option>
              <option value="showroom">Showroom </option>
              <option value="service_apartment">Service Apartment </option>
              <option value="godown">Godown</option>
              <option value="shed">Shed</option>
              <option value="co_working_space"> Co-working Space </option>
              <option value="commercial_complex">Commercial Complex</option>
              <option value="industrialbuilding">Industrial Building</option>
              <option value="industrial_shed">Industrial Shed </option>
            </Form.Select>
          </div>
          <div className='col mb-3'>
            <Form.Select
              onChange={(e) => handleStatus(e.target.value)}
              style={{ width: '200px', height: '40px' }}>
              <option value='all'>Status All :</option>
              <option value="approved">Approved</option>
              <option value="rejected">Reject</option>
              <option value="for_approval">For Approval</option>
            </Form.Select>

          </div>
          <div className='col'>
            <Form.Control
              id="Search"
              type="text"
              placeholder="Search"
              name="Search"
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              style={{
                width: '300px',
                height: '40px'
              }}
            />
          </div>
        </div>

        <Table responsive="xl" style={{ fontFamily: 'Roboto' }}>
          <caption>Total Enquired: {propertyCount}</caption>
          <thead>
            <tr>
              <th>Sl. no.</th>
              <th>Name</th>
              <th>Property type</th>
              <th>Posted on</th>
              <th>Enquiries</th>
              <th>Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>

            {properties.map((property, index) => (
              <tr key={property.id}>
                {/* <td>{property.id}</td> */}
                <td tabl="true">{index + 1 + (currentPage - 1) * 10}</td>
                <td>{property.name}</td>
                <td>{property && property.property_subtype ? property.property_subtype.replace(/_/g, ' ') : null}</td>
                <td>{property.posted_on}</td>
                <td>{property.total_enquiries}</td>
                <td>
                  <Link to={`/Selling/${property.id}`}  style={{
                  color: property.approved === true ? 'green' :
                    property.approved === false ? 'red' :
                      'rgba(255, 122, 0, 1)',
                  textDecoration: 'none' // Corrected here
                }} >
                  {property.you_are_here_to === 'rent' ? 'Rental' :
                    property.you_are_here_to === 'sell' ? 'Selling' :
                      property.you_are_here_to === 'lease' ? 'Lease' : ''}
                  </Link>
                </td>
                <td style={{
                  color: property.approved === true ? 'green' :
                    property.approved === false ? 'red' :
                      'rgba(255, 122, 0, 1)'
                }}>
                  {property.approved === true ? 'approved' :
                    property.approved === false ? 'rejected' :
                      property.approved === null ? 'For approved' : null}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

      </div>
      <div className='d-flex justify-content-center mt-3'>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className={`page-item ${!previousPage ? 'disabled' : ''}`}>
              <Button aria-label="Previous" onClick={handlePreviousPage}>
                <span><FaAnglesLeft style={{ color: 'red' }} /></span>
              </Button>
            </li>
            {renderPaginationNumbers()}
            <li className={`page-item ${!nextPage ? 'disabled' : ''}`}>
              <Button aria-label="Next" onClick={handleNextPage}>
                <span><FaAnglesRight style={{ color: 'red' }} /></span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Properties;