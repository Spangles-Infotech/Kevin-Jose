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
import { Link } from 'react-router-dom';

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
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10); // State for items per page
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/get_active_employees/`);
        setUsers(response.data);
        setFilteredUsers(response.data);
        setTotalCount(response.data.length);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to first page when search query changes
  }, [search, users]);

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

  const currentItems = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card" style={{ margin: '1%', borderColor: 'red', width: '98%' }}>
            <div className="row m-2 mt-4 mb-4">
              <div className="col-lg-3">
                <h1 className="prop2 ">Attendance List</h1>
              </div>
              <div className="col-lg-6  d-flex">
                <div className="card d-flex m-1" style={{ flexDirection: 'row', height: '30px' }}>
                  <IconContext.Provider value={{ className: 'react-icons', size: '1.7em', height: '10px' }}>
                    <GoFilter />
                    <span>Filter</span>
                  </IconContext.Provider>
                </div>

              </div>
              <div className="col-lg-3 ">
                <Form.Control
                  id="Search"
                  type="text"
                  placeholder="Search"
                  name="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ width: '250px', height: '40px' }}
                />
              </div>
            </div>
            <div className="table-responsive">
              <Table responsive="xl" style={{ fontFamily: 'Roboto' }}>
                <thead>
                  <tr>
                    <th>Sl. no.</th>
                    <th>Employee Code</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((user, index) => (
                    <tr key={user.employee_code}>
                      <td>{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                      <td>{user.employee_code}</td>
                      <td>
                        <Link to={`/Attendancecal/${user.employee_code}`} style={{ textDecoration: 'none', color: 'black' }}>{user.name}</Link>
                      </td>
                      <td>{user.designation}</td>
                      <td style={{
                        color: user.status === 'present' ? 'green' :
                          user.status === 'absent' ? 'red' :
                            'black'
                      }}>
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
                            <Dropdown.Item onClick={() => markAttendance('present', user.employee_code)}>
                              Present
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => markAttendance('absent', user.employee_code)}>
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
        </div>
        <Pagination currentPage={currentPage} totalPages={pageCount} handlePageChange={handlePageChange} />
      </div>
    </>
  );
}

export default Attendance;