import React, { Fragment, useState, useEffect } from 'react';
import './GivePage.css'
import circle from '../assets/circle.png';
import axios from '../api/index';
import profile from '../assets/propic.jpg';
import { Recieved } from './Data.js';
import { GiveOut } from './Data.js';



function GivePage() {
    const [Persons, setPersons] = useState([]);
    // const [Reasons, setReasons] = useState(GiveOut);

    useEffect(() => {

        axios.get('give')
        .then(response => {
            setPersons(response.data.query)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="container">
            <div className="headnav">
                <div className="title">
                    <h2>Give</h2>
                    <img src={circle} alt="" />
                </div>
                <div className="profile">
                    <div className="search">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="5" cy="5" r="4.3" stroke="#2B3674" stroke-width="1.4" />
                            <line x1="10.0101" y1="11" x2="8" y2="8.98995" stroke="#2B3674" stroke-width="1.4" stroke-linecap="round" />
                        </svg>
                        <input type="text" placeholder='Search' />

                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2901 17.29L18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4801 19 19.9201 17.92 19.2901 17.29ZM16.0001 17H8.00005V11C8.00005 8.52 9.51005 6.5 12.0001 6.5C14.4901 6.5 16.0001 8.52 16.0001 11V17ZM12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22Z" fill="#A3AED0" />
                    </svg>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.95703 18C12.733 18 15.2684 16.737 16.9481 14.6675C17.1966 14.3613 16.9256 13.9141 16.5416 13.9872C12.1751 14.8188 8.16522 11.4709 8.16522 7.06303C8.16522 4.52398 9.52444 2.18914 11.7335 0.931992C12.074 0.738211 11.9884 0.221941 11.6015 0.150469C11.059 0.0504468 10.5086 8.21369e-05 9.95703 0C4.98914 0 0.957031 4.02578 0.957031 9C0.957031 13.9679 4.98281 18 9.95703 18Z" fill="#A3AED0" />
                    </svg>
                    <img className='propic' src={profile} alt="" />
                </div>
            </div>
            <div className="received">
                <h4>Recieved</h4>
                <table>
                    <thead>
                        <tr>
                            {/* <th>Amount Received</th>
                            <th>Status</th> */}
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Persons.map((person, index) => (
                            <Fragment key={index}>
                                <tr>
                                    {/* <td>{person.Amount}</td>
                                    <td className='status'><button>{person.Status ? 'Completed' : 'canceled'}</button></td> */}
                                    <td>{person.fullname}</td>
                                    <td className='email'>{person.email}</td>
                                    <td>{person.createdAt.toLocaleString().split('T')[0]}</td>
                                    <td>{person.city}</td>

                                </tr>
                            </Fragment>
                        ))}
                    </tbody>
                </table>

            </div>
            <div className="giving">
                <h4>Recieved</h4>
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Amount Received</th> */}
                                {/* <th>Status</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Persons.map((Reason, index) => (
                                <Fragment key={index}>
                                    <tr>
                                        {/* <td>{Reason.Amount}</td> */}
                                        {/* <td ><button>
                                        {Reason.Status ? 'completed' : 'canceled'}</button></td> */}
                                        <td>{Reason.fullname}</td>
                                        <td className='email'>{Reason.email}</td>
                                        <td>{Reason.createdAt.toLocaleString().split('T')[0]}</td>
                                        <td>{Reason.city}</td>

                                    </tr>
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    );
}

export default GivePage;
