import React from 'react';
import { Link } from 'react-router-dom'; 
import './RoleSelection.css'
import logo from '../assets/images/logo.svg'




function RoleSelection() {
    return (
        <div>
            

            <div className="container-fluid main-container-role">
                <div className='row'>
            <div className = 'col-md-6'>

                    <h1 className='role-select-heading text-center'>Account type</h1>
                </div>
                    <div className = 'col-md-6'>
                        <img className='logo-role-page' src={logo} alt="Logo" />
                    </div>
                    </div>

                <div className='row'>
                

 
                    <h2 className='second-enter-details-heading text-center'>Please select which best applies to you</h2>
                    <div className='row choice-container justify-content-center'>
                    <div className='col-md-6'>

                        <Link to="/client-enter-details" className='role-link'>
                            <h2 className='role client'>I am looking for carers</h2>
                        </Link>
                            
                        </div> 
                        <div className='col-md-6'>

                            <h2 className='role carer'>I am a carer</h2>

                        </div> 
                        </div>
        
        

                    </div>
            </div>
            </div>


    );
}

export default RoleSelection;