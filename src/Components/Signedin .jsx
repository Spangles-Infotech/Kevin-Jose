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

function Signedin() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [propertyCount, setPropertyCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState('');
  const [rollType, setRollType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties(`http://127.0.0.1:8000/api/basic_users/?page=1&page_size=10`);
  }, []);

  const fetchProperties = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setProperties(data.results);
      setPreviousPage(data.previous);
      setNextPage(data.next);
      setPropertyCount(data.count);
      setTotalPages(Math.ceil(data.count / data.results.length));
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      setCurrentPage(currentPage + 1);
      fetchProperties(nextPage);
    }
  };

  const handlePreviousPage = () => {
    if (previousPage) {
      setCurrentPage(currentPage - 1);
      fetchProperties(previousPage);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchProperties(`http://127.0.0.1:8000/api/basic_users/?page=${pageNumber}&page_size=10&search=${search}`);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
    setCurrentPage(1); 
    fetchProperties(`http://127.0.0.1:8000/api/basic_users/?page=1&page_size=10&search=${value}`);
  };

  // const handleRoll = (value) => {
  //   setRollType(value);
  //   setCurrentPage(1); // Reset current page
  //   fetchProperties(`http://127.0.0.1:8000/api/basic_users/?page=1&page_size=10&search=${search}&propertytype=${value}`);
  // };

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
            to="#"
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
  };

  return (
    <div className='PropertyList'>
      <div className='card' style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
        <div className='mt-3 mb-3 d-flex justify-content-between'>
          <h1 className='prop2 '>Signed in</h1>
          {/* <div className="d-flex custom-select m-3 mt-4"> */}
            {/* <div className='card d-flex m-1' style={{ flexDirection: 'row', height: '30px' }}>
              <IconContext.Provider value={{ className: 'react-icons', size: '1.7em', height: '10px' }} >
                <GoFilter /><span>Filter</span>
              </IconContext.Provider>
            </div>
            <Form.Select onChange={(e) => handleRoll(e.target.value)} style={{ width: '200px', height: '40px' }}>
              <option value=''>Roll :</option>
              <option value="factory">Factory	</option>
            </Form.Select> */}
          {/* </div> */}
          <div>
            <Form.Control
              id="Search"
              type="text"
              placeholder="Search"
              className='m-4 mt-4'
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
          <caption>Total Signedin: {propertyCount}</caption>
          <thead>
            <tr>
              <th>Sl. no.</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Registered on</th>
            </tr>
          </thead>
          <tbody >
            {properties.map((property, index) => (
              <tr key={property.id} >
                <td tabl="true">{index + 1+ (currentPage - 1) * 1}</td>
                <td><Link to={`/Employee/${property.id}`} style={{ textDecoration: 'none', color: 'black' }}>{property.username}</Link></td>
                <td>{property.phone}</td>
                <td>{property.email}</td>
                <td>{property.registered_on}</td>
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

export default Signedin;

