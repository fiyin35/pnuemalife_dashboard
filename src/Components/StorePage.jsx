import React, {useState} from 'react';
import './StorePages.css'
import "./Responsiveness.css";
import circle from '../assets/circle.png';
import profile from '../assets/propic.jpg';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BsPencilSquare } from 'react-icons/bs';
import spirit1 from '../assets/spirit1.png';
import spirit2 from '../assets/spirit2.png';
import faith1 from '../assets/faith1.png';
import faith2 from '../assets/faith2.png';
import power1 from '../assets/power1.png';
import power2 from '../assets/power2.png';
import prayer1 from '../assets/prayer1.png';
import prayer2 from '../assets/prayer2.png';

import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import './modal.css';

import BasicModal from './Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const StoreForm = () => {

    const [formData, setFormData] = useState({
        message: '',
        title: ''
    })

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} >
           <div className="modal_container"> 
           <form className="form">
                <div className="form__item">
                    <TextField
                        value={formData.message}
                        id="fullName"
                        label="Full name*"
                        type="text"
                        style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                        variant="filled"
                        onChange={(e)=>setFormData({...formData, message: e.target.value})}
                    />
                </div>
            </form>
           </div>
          </Box>
        </Modal>
      </div>
    )
}


function StorePage() {

    const [openStoreForm, setOpenStoreForm] = useState(false)

    const toggleStore = ()=>setOpenStoreForm(!openStoreForm);

    return (
        <div className="container">
            <div className="headnav">
                <div className="title">
                    <h2>Store</h2>
                    <img src={circle} alt="" className="circle" onClick={toggleStore} />
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
            <div className="store">
                <div className="books">
                    <h2>Books on spirit</h2>
                    <div className="slide">
                        <div className="spirit">
                            <div className="part">
                                <img src={spirit1} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>
                            <div className="part">
                                <img src={spirit2} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>
                            <div className="part">
                                <img src={spirit2} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="books">
                    <h2>Books on spirit</h2>
                    <div className="slide">
                        <div className="spirit">
                            <div className="part">
                                <img src={power1} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>
                            <div className="part">
                                <img src={power2} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>
                            <div className="part">
                                <img src={power2} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>The realities in the Spirit are not physical..</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="books">
                    <h2>Books on Faith</h2>
                    <div className="slide">
                        <div className="spirit">
                            <div className="part">
                                <img src={faith1} alt="" />
                                <h5>Faith Festival (Part 1)</h5>
                                <p>The death of Jesus broke the outerman for us so that there can be an outpouring of the Spirit.</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />
                                </div>
                            </div>
                            <div className="part">
                                <img src={faith2} alt="" />
                                <h5>Faith Festival (Part 2)</h5>
                                <p>The character of the devil is to accuse man regardless of the good or bad that he does but the sacri</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />
                                </div>
                            </div>
                            <div className="part">
                                <img src={faith2} alt="" />
                                <h5>Faith Festival (Part 2)</h5>
                                <p>The character of the devil is to accuse man regardless of the good or bad that he does but the sacri</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* <div className="books">
                    <h2>Books on Prayer</h2>
                    <div className="slide">
                        <div className="spirit">
                            <div className="part">
                                <div className="read">
                                <img src={prayer1} alt="" />
                                <h5>planted (Part 1)</h5>
                                <p>Influence is spiritual, response is physical.</p>
                                <div className='alone'>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />
                                </div>
                                </div>
                            </div>
                            <div className="part">
                                <img src={prayer2} alt="" />
                                <div className="read">
                                <h5>Multiplied Infliance (Part 2)</h5>
                                <p>Determining to do the will of God brings about the establishment of the Kingdom of God.</p>
                                <div>
                                    <BsPencilSquare className='edit' />
                                    <RiDeleteBin6Fill className='delete' />
                                </div>
                                </div>
                            </div>
                            <div className="part">
                                <img src={prayer2} alt="" />
                                <div className="read"><h5>Multiplied Infliance (Part 2)</h5>
                                    <p>Determining to do the will of God brings about the establishment of the Kingdom of God.</p>
                                    <div>
                                        <BsPencilSquare className='edit' />
                                        <RiDeleteBin6Fill className='delete' />
                                    </div></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default StorePage;
