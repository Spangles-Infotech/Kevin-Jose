import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import '../Style/Employeeprofile.css';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { useNavigate, Link } from "react-router-dom";

function AddEmployeUpdate() {
    const { employee_code } = useParams();
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('No file chosen');
    const [certificate, setCertificate] = useState()
    const [newPhoto, setNewPhoto] = useState(null);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: '',
        photo: '',
        email_office: '',
        designation: '',
        employee_code: '',
        joining_date: '',
        gender: '',
        marital_status: '',
        phone_number: '',
        alternative_phone_number: '',
        blood_group: '',
        aadhar_number: '',
        account_number: '',
        ifsc_code: '',
        bank_name: '',
        pan_number: '',
        status: '',
        educations: [{ qualification: '', certification: { certification_file: null } }],

        addresses: [
            {
                address_type: 'present',
                address_line1: '',
                city: '',
                district: '',
                state: '',
                country: '',
                zipcode: ''
            },
            {
                address_type: 'permanent',
                address_line1: '',
                city: '',
                district: '',
                state: '',
                country: '',
                zipcode: ''
            }
        ]
    });
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
    
        axios.get(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })
        .then(res => {
            // Assuming res.data contains the employee data
            setEmployee(res.data);
        })
        .catch(error => {
            console.error("Error fetching employee details:", error);
            if (error.response?.status === 401) {
                console.error('User unauthorized. Redirecting to login page...');
                navigate('/login');
            } else {
                console.error('Error:', error);
            }
        });
    }, [employee_code]);
    
    // useEffect(() => {
        
    //     axios.get(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`)
    //         .then(res => {

    //             // setFileName(photo ? photo : 'photo');
    //             setEmployee(res.data);
    //         })
    //         .catch(err => console.log(err));
    // }, [employee_code]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name.startsWith("addresses")) {
            const parts = name.split(".");
            const index = parseInt(parts[0].substring(parts[0].indexOf("[") + 1, parts[0].indexOf("]")), 10);
            const field = parts[1];
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                addresses: prevEmployee.addresses.map((address, i) => {
                    if (i === index) {
                        return { ...address, [field]: value };
                    }
                    return address;
                })
            }));
        } else if (name.startsWith("educations")) {
            // code for handling education fields
            const parts = name.split(".");
            const index = parseInt(parts[0].substring(parts[0].indexOf("[") + 1, parts[0].indexOf("]")), 10);
            const subField = parts[1];
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                educations: prevEmployee.educations.map((education, i) => {
                    if (i === index) {
                        return { ...education, [subField]: value };
                    }
                    console.log(education, 'eee');
                    return education;
                })
            }));
        } else if (name === 'user.password') {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                user: {
                    ...prevEmployee.user,
                    password: value
                }
            }));

        } else {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                [name]: value
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!employee.name) newErrors.name = 'Name is required';
        if (!employee.email_office) newErrors.email_office = 'Office email is required';
        if (!employee.phone_number) newErrors.phone_number = 'Phone number is required';
        if (!employee.aadhar_number) newErrors.aadhar_number = 'Aadhar number is required';
        if (!employee.designation) newErrors.designation = 'Designation is required';
        if (!employee.gender) newErrors.gender = 'Gender email is required';
        if (!employee.marital_status) newErrors.marital_status = 'Marital status is required';
        if (!employee.alternative_phone_number) newErrors.alternative_phone_number = 'Alternative phone number number is required';
        if (!employee.blood_group) newErrors.blood_group = 'Blood group is required';
        if (!employee.account_number) newErrors.account_number = 'Account number  is required';
        if (!employee.email_personal) newErrors.email_personal = 'email personal is required';
        if (!employee.ifsc_code) newErrors.ifsc_code = 'ifsc code is required';
        if (!employee.bank_name) newErrors.bank_name = 'bank name is required';
        if (!employee.pan_number) newErrors.pan_number = 'bank_name is required';




        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const EmployeUpdate = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const formData = new FormData();
            if (newPhoto) {
                formData.append('photo', newPhoto);
            }
            formData.append("name", employee.name);
            formData.append("employee_code", employee.employee_code);
            formData.append("designation", employee.designation);
            formData.append("joining_date", employee.joining_date);
            formData.append("gender", employee.gender);
            formData.append("marital_status", employee.marital_status);
            formData.append("phone_number", employee.phone_number);
            formData.append("alternative_phone_number", employee.alternative_phone_number);
            formData.append("email_office", employee.email_office);
            formData.append("email_personal", employee.email_personal);
            formData.append("blood_group", employee.blood_group);
            formData.append("aadhar_number", employee.aadhar_number);
            formData.append("account_number", employee.account_number);
            formData.append("ifsc_code", employee.ifsc_code);
            formData.append("bank_name", employee.bank_name);
            formData.append("pan_number", employee.pan_number);

            // Append other form data fields here

            employee.addresses.forEach((address, index) => {
                formData.append(`addresses[${index}]address_type`, address.address_type);
                formData.append(`addresses[${index}]address_line1`, address.address_line1);
                formData.append(`addresses[${index}]city`, address.city);
                formData.append(`addresses[${index}]district`, address.district);
                formData.append(`addresses[${index}]state`, address.state);
                formData.append(`addresses[${index}]country`, address.country);
                formData.append(`addresses[${index}]zipcode`, address.zipcode);
            });

            employee.certificate?.education?.forEach((education, index) => {
                formData.append(`education[${index}]qualification`, education.qualification);
                formData.append(`education[${index}]certification.certification_file`, education.certification.certification_file);
                console.log(education, 'co');
            });

            // Append other form data fields here

            const response = await axios.put(`http://127.0.0.1:8000/api/employee_detail/${employee_code}/`, formData);
            console.log(response.data);navigate('/Employeeprofile');
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setNewPhoto(selectedFile);
        setFileName(selectedFile.name);
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            photo: URL.createObjectURL(selectedFile)
        }));
    };



    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.map((education, i) => {
                if (i === index) {
                    return {
                        ...education,
                        qualification: value // Update qualification field
                    };
                }
                return education;
            })
        }));
    };

    const handleCertificationFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setCertificate(file)
        } else {
            console.error("Please select a PDF file");
        }
    };


    
    const handleCancle = () => {
        navigate('/Employeeprofile');
    };
    const addMoreEducation = () => {
        if (employee.educations.length < 6) {
            setEmployee(prevEmployee => ({
                ...prevEmployee,
                educations: [
                    ...prevEmployee.educations,
                    { qualification: '', certification: { certification_file: null } } // Add new education field
                ]
            }));
        } else {

            console.log("Maximum limit reached");
        }
    };

    const handleRemoveItem = (index) => {
        setEmployee(prevEmployee => ({
            ...prevEmployee,
            educations: prevEmployee.educations.filter((_, i) => i !== index)
        }));
    };


    return (
        <div className='card m-2 p-5' style={{ borderColor: 'red' }}>
            <h1 className='emploleelist' > Employee Update</h1>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <label htmlFor="name" >Name:</label>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        id="name"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.name}
                    </Form.Control.Feedback>

                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="employee_code" >Employee Code:</label>
                    <Form.Control
                        type="text"
                        placeholder="Employee Code"
                        id="employee_code"
                        name="employee_code"
                        value={employee.employee_code}
                        onChange={handleChange}
                        disabled
                    />


                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <label htmlFor="designation" > Designation:</label>
                    <Form.Control
                        type="text"
                        placeholder="Designation"
                        id="designation"
                        name="designation"
                        value={employee.designation}
                        onChange={handleChange}
                        isInvalid={!!errors.designation}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.designation}
                    </Form.Control.Feedback>
                </div>
                <div className='col-sm-6'>

                    <label >Photo:</label>
                    <Form.Control
                        type="file"
                        name='photo'
                        onChange={handleFileChange}
                    />
                    <div className='col'>

                    </div>


                </div>
            </div>
            <div className='row  mt-3'>
                <div className='col-sm-6 '>
                    <label htmlFor="gender" >Gender :</label>
                    <Form.Select
                        name='gender'
                        id="gender"
                        placeholder="gender"
                        onChange={handleChange}
                        value={employee.gender}
                        style={{ color: 'black' }}
                        isInvalid={!!errors.gender}

                    >
                        <option value="" >Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>

                    </Form.Select>
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.gender}
                    </Form.Control.Feedback>
                </div>
                <div className='col-sm-6'>
                    <label htmlFor="marital_status" >Marital Status :</label>
                    <Form.Select
                        name='marital_status'
                        id="marital_status"
                        onChange={handleChange}
                        value={employee.marital_status}
                        isInvalid={!!errors.marital_status}

                    >
                        <option value="" >Marital Status</option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="divorced">Divorced</option>
                        <option value="widowed">Widowed</option>

                    </Form.Select>
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.marital_status}
                    </Form.Control.Feedback>

                </div>
            </div>
            <div className='d-flex justify-content-center mt-2 mb-2'>
                <Link style={{ textDecoration: 'none' }} className='d-flex justify-content-end' onClick={addMoreEducation}>
                    <span style={{ color: 'red' }}>Add more</span>
                </Link>
            </div>
            {
                employee.educations.map((education, index) => (
                    <div key={index} className='row mt-3 d-flex'>
                        <div className='col-sm-6'>
                            <label htmlFor={`qualification_${index}`} >Education Qualification :</label>
                            <Form.Control
                                type="text"
                                name={`educations[${index}].qualification`}
                                placeholder="Enter qualification"
                                value={education.qualification}
                                onChange={(e) => handleEducationChange(index, e)}
                                isInvalid={!!errors.qualification}

                            />

                            <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                                {errors.qualification}
                            </Form.Control.Feedback>
                        </div>
                        <div className='col'>
                            <label htmlFor={`certification_file_${index}`} >Certificate:</label>
                            <Form.Control
                                type='file'
                                name={`educations[${index}].certification_file`}
                                id={`certification_file_${index}`}
                                onChange={(e) => handleCertificationFileChange(index, e)}
                                style={{ width: '300px' }}
                           
                            />
                        </div>
                        <div className='col mt-4'>
                            {index !== employee.educations.length - 1 && ( // Render remove button for all fields except the last one
                                <button
                                    className='btn btn-danger d-flex justify-content-end '
                                    onClick={() => handleRemoveItem(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    </div>
                ))
            }

            <div className='row mt-3'>
                <div className="col-sm-6 ">
                    <label htmlFor="phone_number">
                        Phone Number :
                    </label>
                    <Form.Control
                        type="text"
                        id="phone_number"
                        required
                        placeholder="Enter Phone Number"
                        value={employee.phone_number}
                        isInvalid={!!errors.phone_number}

                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, '');
                            const limitedInput = inputVal.slice(0, 10); // Limit to 10 characters
                            setEmployee({ ...employee, phone_number: limitedInput }); // Update state
                        }}
                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.pan_number}
                    </Form.Control.Feedback>


                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="alternative_phone_number"> phone number :</label>
                    <Form.Control
                        type="tel"

                        id="alternative_phone_number"
                        name="alternative_phone_number"

                        placeholder="Alternative phone number"
                        value={employee.alternative_phone_number}
                        isInvalid={!!errors.alternative_phone_number}


                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                            const limitedInput = inputVal.slice(0, 10); // Limit to 10 characters
                            setEmployee({ ...employee, alternative_phone_number: limitedInput }); // Update state
                        }}
                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.alternative_phone_number}
                    </Form.Control.Feedback>
                </div>
            </div>
            <div className='row mt-3 '>
                <div className="col-sm-6">
                    <label htmlFor="email_office">  Email :</label>
                    <Form.Control
                        type="email"
                        id="email_office"
                        name='email_office'
                        placeholder="Enter Email"
                        value={employee.email_office}
                        onChange={handleChange}
                        isInvalid={!!errors.email_office}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.email_office}
                    </Form.Control.Feedback>
                </div>
                <div className='col-sm-6'>
                    <label htmlFor="email_personal">  Email Personal :</label>
                    <Form.Control
                        type="email"
                        className="form-control "
                        id="email_personal"
                        name='email_personal'
                        placeholder="Email Personal "
                        value={employee.email_personal}
                        onChange={handleChange}
                        isInvalid={!!errors.email_personal}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.email_personal}
                    </Form.Control.Feedback>

                </div></div>
            <div className='row mt-3'>
                <div className='col-sm-6'>
                    <label htmlFor="blood_group">Blood Group :</label>
                    <Form.Select
                        id="blood_group"
                        value={employee.blood_group}
                        name='blood_group'
                        required
                        onChange={handleChange}
                        isInvalid={!!errors.blood_group}

                    >
                        <option value="" disabled>Select Blood Group</option>
                        <option value="A+">A Positive (A+)</option>
                        <option value="A-">A Negative (A-)</option>
                        <option value="B+">B Positive (B+)</option>
                        <option value="B-">B Negative (B-)</option>
                        <option value="AB+">AB Positive (AB+)</option>
                        <option value="AB-">AB Negative (AB-)</option>
                        <option value="O+">O Positive (O+)</option>
                        <option value="O-">O Negative (O-)</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.blood_group}
                    </Form.Control.Feedback>

                </div>
                <div className='col-sm-6'>
                    <label htmlFor="aadhar_number">Aadhaar Number :</label>
                    <Form.Control

                        value={employee.aadhar_number}
                        type="number"
                        id="aadhar_number"
                        name='aadhar_number'
                        placeholder="Aadhar number"
                        isInvalid={!!errors.aadhar_number}


                        onChange={(e) => {
                            const inputVal = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                            const limitedInput = inputVal.slice(0, 12); // Limit to 10 characters
                            setEmployee({ ...employee, aadhar_number: limitedInput }); // Update state
                        }}
                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.aadhar_number}
                    </Form.Control.Feedback>
                </div>
            </div>


            <div className='row mt-3'>
                <div className="col-sm-6">
                    <Form.Group controlId="present">
                        <Form.Label >Present Address </Form.Label>
                        <Form.Control
                            type="text"
                            name="addresses[0].address_line1"
                            placeholder="Enter present address"
                            value={employee.addresses[0].address_line1}
                            onChange={handleChange}
                          required

                        />
            
                        <label htmlFor="city" className='mt-3 '>City :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].city"
                            placeholder="Enter present city"
                            value={employee.addresses[0].city}
                            onChange={handleChange}
                            required

                        />
                
                        <label htmlFor="password" className='mt-3'>District :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].district"
                            placeholder="Enter present district"
                            value={employee.addresses[0].district}
                            onChange={handleChange}
                            required
                        />
                    
                        <label htmlFor="state" className='mt-3'>State :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].state"
                            placeholder="Enter present state"
                            value={employee.addresses[0].state}
                            onChange={handleChange}
                            required
                        />
            

                        <label htmlFor="country" className='mt-3'>Country :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].country"
                            placeholder="Enter present country"
                            value={employee.addresses[0].country}
                            onChange={handleChange}
                            required
                        />
            
                        <label htmlFor="zipcode" className='mt-3'>Zipcode :</label>
                        <Form.Control
                            type="text"
                            name="addresses[0].zipcode"
                            placeholder="Enter present zipcode"
                            value={employee.addresses[0].zipcode}
                            onChange={handleChange}
                            required
                        />
               
                    </Form.Group>

                </div>
                <div className='col-sm-6'>
                    <Form.Group controlId="permanent">
                        <Form.Label>Permanent Address</Form.Label>
                        <Form.Control
                            type="text"
                            name="addresses[1].address_line1"
                            placeholder="Enter permanent address"
                            value={employee.addresses[1].address_line1}
                            onChange={handleChange}
required
                        />

                        <label htmlFor="city" className='mt-3'>City :</label>

                        <Form.Control
                            type="text"
                            name="addresses[1].city"
                            placeholder="Enter permanent city"
                            value={employee.addresses[1].city}
                            onChange={handleChange}
required
                        />

                        <label htmlFor="district" className='mt-3'>District :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].district"
                            placeholder="Enter permanent district"
                            value={employee.addresses[1].district}
                            onChange={handleChange}
required
                        />

                        <label htmlFor="state" className='mt-3'>State :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].state"
                            placeholder="Enter permanent state"
                            value={employee.addresses[1].state}
                            onChange={handleChange}
required
                        />

                        <label htmlFor="country" className='mt-3'>Country :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].country"
                            placeholder="Enter permanent country"
                            value={employee.addresses[1].country}
                            onChange={handleChange}

required
                        />

                        <label htmlFor="zipcode" className='mt-3'>Zipcode :</label>
                        <Form.Control
                            type="text"
                            name="addresses[1].zipcode"
                            placeholder="Enter permanent zipcode"
                            value={employee.addresses[1].zipcode}
                            onChange={handleChange}
required

                        />

                    </Form.Group>
                </div>
            </div>

            <div className='row mt-2'>
                <div className='col-sm-6 '>
                    <label htmlFor="account_number" className='mt-3'>Account Number :</label>

                    <Form.Control
                        required
                        id="account_number"
                        type="number"
                        value={employee.account_number}
                        name='account_number'
                        placeholder=" Account number"
                        onChange={handleChange}
                        isInvalid={!!errors.account_number}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.account_number}
                    </Form.Control.Feedback>
                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="ifsc_code" className='mt-3'>IFSC Code :</label>
                    <Form.Control
                        id="ifsc_code"
                        type="text"
                        required
                        name='ifsc_code'
                        placeholder="IFC"
                        value={employee.ifsc_code}
                        onChange={handleChange}
                        isInvalid={!!errors.ifsc_code}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.ifsc_code}
                    </Form.Control.Feedback>

                </div>
            </div>
            <div className='row mt-3 mb-5'>
                <div className='col-sm-6 '>
                    <label htmlFor="bank_name" className='mt-3'>Bank Name :</label>
                    <Form.Control
                        id="bank_name"
                        type="text"
                        required
                        value={employee.bank_name}
                        name='bank_name'
                        placeholder="Bank Name"
                        onChange={handleChange}
                        isInvalid={!!errors.bank_name}

                    />

                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.bank_name}
                    </Form.Control.Feedback>
                </div>
                <div className='col-sm-6 '>
                    <label htmlFor="pan_number" className='mt-3'>PAN Number :</label>
                    <Form.Control
                        id="pan_number"
                        type="number"
                        required
                        value={employee.pan_number}
                        name='pan_number'
                        placeholder="PanNumber"
                        onChange={handleChange}
                        isInvalid={!!errors.pan_number}

                    />
                    <Form.Control.Feedback type="invalid"style={{color:'red',fontSize:'13px'}}>
                        {errors.pan_number}
                    </Form.Control.Feedback>

                </div>
            </div>


            <div className='mb-5 d-flex justify-content-end'>
            <button type="button" onClick={handleCancle} className="btn btn-danger" style={{ width: '200px', margin: '20px' }}>
                   Cancle
                </button>
                <button type="button" onClick={EmployeUpdate} className="btn btn-danger" style={{ width: '200px', margin: '20px' }}>
                    Update 
                </button>
            </div>
        </div >
    );
}

export default AddEmployeUpdate;
