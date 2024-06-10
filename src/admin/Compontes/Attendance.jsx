import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';
import '../Style/Properties.css';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { LuPenLine } from 'react-icons/lu';
import { IconContext } from 'react-icons';
import { Dropdown } from 'react-bootstrap';
import '../Style/Attendan.css';
import { GoFilter } from 'react-icons/go';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';

function Pagination({ currentPage, totalPages, handlePageChange }) {
  const pageNumbers = [];
  const maxPageLinks = 5;
  const totalPagesToShow = Math.min(totalPages, maxPageLinks);

  let startIndex = currentPage - Math.floor(maxPageLinks / 2);
  startIndex = Math.max(startIndex, 1);

  for (let i = startIndex; i < startIndex + totalPagesToShow; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="page-link"
          >
            <FaAnglesLeft style={{ color: 'red' }} />
          </button>
        </li>
        {startIndex > 1 && (
          <li>
            <span className="page-link">...</span>
          </li>
        )}
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber} className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}>
            <button
              onClick={() => handlePageChange(pageNumber)}
              className="page-link"
              style={{ backgroundColor: pageNumber === currentPage ? 'red' : 'inherit' }}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        {startIndex + maxPageLinks <= totalPages && (
          <li>
            <span className="page-link">...</span>
          </li>
        )}
        <li>
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="page-link"
          >
            <FaAnglesRight style={{ color: 'red' }} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

function Attendance() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get('http://127.0.0.1:8000/api/get_active_employees/', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        setUsers(response.data);
        setFilteredUsers(response.data);
        setTotalCount(response.data.length);
      } catch (error) {
        handleError(error);
      }
    };

    fetchData();
  }, []);
  const handleError = (error) => {
    if (error.response?.status === 401) {
      console.error('User unauthorized. Redirecting to login page...');
      navigate('/login');
    } else {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === '' || user.status === statusFilter)
    );
    setFilteredUsers(filtered);
    setTotalCount(filtered.length);
    setCurrentPage(1); // Reset to first page when search query or status filter changes
  }, [search, statusFilter, users]);

  useEffect(() => {
    setCurrentPage(1); // Reset to first page when items per page changes
  }, [itemsPerPage]);

  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const markAttendance = async (status, employee_code) => {
    try {
      let url = `http://127.0.0.1:8000/api/mark_attendance/${employee_code}/`;
      let successMessage = '';

      if (status === 'present') {
        successMessage = 'Marked as present successfully';
      } else if (status === 'absent') {
        successMessage = 'Marked as absent successfully';
      } else {
        throw new Error('Invalid action:', status);
      }

      const response = await axios.post(url, { status });

      // Update the status locally in users and filteredUsers
      const updatedUsers = users.map(user => {
        if (user.employee_code === employee_code) {
          return { ...user, status };
        }
        return user;
      });

      const updatedFilteredUsers = filteredUsers.map(user => {
        if (user.employee_code === employee_code) {
          return { ...user, status };
        }
        return user;
      });

      setUsers(updatedUsers);
      setFilteredUsers(updatedFilteredUsers);

      console.log(successMessage);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNavigation = (user) => {
    navigate(`/Attendancecal/${user.employee_code}`);
  };

  const currentItems = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>

        <div className="Attendance" style={{marginBottom:'15%'}}>
          <div className='card' style={{ margin: '1%', borderColor: 'red', borderRadius: '30px', padding: '10px' }}>
            <div className="row mt-5 mb-5 " style={{paddingLeft:'2%',paddingRight:'6%'}}>
              <div className="col-lg-3">
                <h4 style={{ marginLeft: '5%', marginTop: '3%' }}> <b>Attendance List </b></h4>

              </div>
              <div className="col d-flex justify-content-center custom-select ">

                <div className='card d-flex ' style={{ flexDirection: 'row', height: '36px', marginRight: '5px', padding: '1px' }}>
                  <IconContext.Provider value={{ className: 'react-icons', size: '1.5em', }} >
                    <GoFilter className='mt-1' /><span style={{ padding: '2px' }}>Filter</span>
                  </IconContext.Provider>

                </div>
                <div>
                  <Form.Select
                    style={{ width: '200px', height: '36px' }}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value=''>Status :</option>
                    <option value="present">Present</option>
                    <option value="absent">Absent</option>
                  </Form.Select>
                </div>
              </div>
              <div className="col d-flex justify-content-end mt-1">
                <Form.Control
                  id="Search"
                  type="text"
                  placeholder="Search"
                  name="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: '250px', height: '36px'}}
                />
              </div>
            </div>
            <div>
              <Table responsive="xl">
                <thead>
                  <tr>
                    <th></th>
                    <th>Sl.no.</th>
                    <th></th>
                    <th>Employee code</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((user, index) => (
                    <tr key={user.employee_code} style={{ cursor: 'pointer' }}>
                      <td onClick={() => handleNavigation(user)}></td>

                      <td onClick={() => handleNavigation(user)}>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                      <td onClick={() => handleNavigation(user)}></td>

                      <td onClick={() => handleNavigation(user)}>{user.employee_code}</td>
                      <td onClick={() => handleNavigation(user)}>{user.name}</td>
                      <td onClick={() => handleNavigation(user)}>{user.designation}</td>
                      <td style={{
                        color: user.status === 'present' ? 'green' :
                          user.status === 'absent' ? 'red' :
                            'black'
                      }} onClick={() => handleNavigation(user)}>
                        {user.status === 'present' ? 'Present' :
                          user.status === 'absent' ? 'Absent' :
                            user.status === null ? '....' : ''}
                      </td>
                      <td>
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdownMenuButton">
                            <LuPenLine style={{ color: 'red' }} />
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => markAttendance('present', user.employee_code)} className="dropdown-item">
                              Present
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => markAttendance('absent', user.employee_code)} className="dropdown-item2">
                              Absent
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
     
        <Pagination currentPage={currentPage} totalPages={pageCount} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}

export default Attendance;
