import React, { useState } from 'react';
import './ClientEnterDetails.css';
import logo from '../assets/images/logo.svg'



function ClientEnterDetails() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [personalDescription, setPersonalDescription] = useState('');
    const [profilePicture, setProfilePicture] = useState(null);
    const [profilePicturePreview, setProfilePicturePreview] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('personal_description', personalDescription);
        if (profilePicture) {
            formData.append('profile_picture', profilePicture);
        }
        // Add your fetch call here
    };

    const handleProfilePictureChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setProfilePicture(img);
            setProfilePicturePreview(URL.createObjectURL(img));
        }
    };

    return (
        <div className="container-fluid main-container-details">
            <div className='row header-row'> 
                <div className = 'col-md-6'>
                    <h1 className='heading-details text-center'>Your Details</h1>
                </div>
                    <div className = 'col-md-6'>
                        <img className='logo-page' src={logo} alt="Logo" />
                    </div>
            </div>
            <h2 className='second-enter-details-heading text-center mb-4'>Please enter your details</h2>
            <form onSubmit={handleSubmit} className="details-form row container mt-5">
                <div className="col-md-6 mt-2">
                    <input 
                        className="form-control mb-2" 
                        type="text" 
                        value={firstName} 
                        onChange={(e) => setFirstName(e.target.value)} 
                        placeholder="First Name"
                    />
                    <input 
                        className="form-control mb-4"
                        type="text" 
                        value={lastName} 
                        onChange={(e) => setLastName(e.target.value)} 
                        placeholder="Last Name"
                    />
                    <textarea 
                        className="form-control personal"
                        value={personalDescription} 
                        onChange={(e) => setPersonalDescription(e.target.value)} 
                        placeholder="Personal Description"
                        rows="4"
                    ></textarea>
                </div>
                        <div className="col-md-6">
                            <label htmlFor="profilePicture" className="form-label d-block text-center mb-4">Upload Photo</label>
                            <div className="image-preview mb-4">
                                {profilePicturePreview ? (
                                    <img src={profilePicturePreview} alt="Preview" className="img-fluid" />
                                ) : (
                                    <div className="image-placeholder">No image selected</div>
                                )}
                            </div>
                        <input 
                            className="form-control upload d-block mb-2"
                            type="file" 
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                        />
                    </div>

                <div className="col-12 text-center mt-3">
                    <button className="submit-details-btn" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
    
}

export default ClientEnterDetails;
