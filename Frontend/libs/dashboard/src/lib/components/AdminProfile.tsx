import React, { } from 'react';
import { useSelector } from 'react-redux';
// import { getUser } from 'libs/auth/src/lib/service/authSlice';
import { getUser } from '@egst.frontend/shared';
import './adminProfile.css';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';

const AdminProfile = () => {


    const user = useSelector(getUser);

    console.log(user)

    return (
        <main className="has-dflex-center">
            <section>
                <div className="lx-container-70">
                    {/* <div className="lx-row">
                        <h1 className="title">Edit your profile</h1>
                    </div> */}
                    <div className="profile_container">
                        <div className="lx-column column-user-pic">
                            <div className="profile-pic bs-md">
                                <h1 className="pic-label">Edit Your Profile</h1>
                                <div className="pic bs-md">
                                    <img src="https://cdn.pixabay.com/photo/2014/04/02/10/25/man-303792_1280.png" alt="" width="4024" height="6048" loading="lazy" />
                                    <a id="change-avatar" className="lx-btn"><i className="fas fa-camera-retro"></i>&nbsp;&nbsp; <b style={{ fontSize: '12px' }}> Change profile </b> </a>
                                </div>
                                <div className="pic-info">
                                    <p style={{ display: 'flex', textAlign: 'center' }} ><MdOutlineAdminPanelSettings style={{ fontSize: '17px', marginRight: '5px' }} /><b style={{ textTransform: 'uppercase' }}> {user.role} </b></p>
                                </div>
                            </div>
                        </div>
                        <div className="lx-column">
                            <form action="get">
                                <div className="fieldset">
                                    <label htmlFor="user-name">Name</label>
                                    <div className="input-wrapper">
                                        <span className="icon"><i className="fas fa-user"></i></span>
                                        <input type="text" id="user-name" value={user.fullName} required disabled />
                                    </div>
                                    <div id="user-name-helper" className="helper">
                                        <p>Your name can appear on the platform</p>
                                    </div>
                                </div>
                                {/* <div className="fieldset">
                                    <label htmlFor="user-id">Registration</label>
                                    <div className="input-wrapper">
                                        <span className="icon"><i className="fas fa-address-card"></i></span>
                                        <input type="number" id="user-id" value="424242" required />
                                    </div>
                                    <div id="user-id-helper" className="helper"></div>
                                </div> */}
                                <div className="fieldset">
                                    <label htmlFor="email">E-mail</label>
                                    <div className="input-wrapper">
                                        <span className="icon"><i className="fas fa-envelope"></i></span>
                                        <input type="email" id="email" value={user.email} disabled />
                                    </div>
                                    <div id="email-helper" className="helper"></div>
                                </div>
                                <div className="fieldset">
                                    <label htmlFor="pass">Password</label>
                                    <div className="input-wrapper">
                                        <span className="icon"><i className="fas fa-key"></i></span>
                                        <input type="password" id="pass" value="pass123*" disabled />
                                    </div>
                                    <div id="pass-helper" className="helper"></div>
                                </div>
                                <div className="actions">
                                    <a id="cancel" className="lx-btn"><i className="fas fa-ban"></i>&nbsp;&nbsp;Cancel</a>

                                    <a id="save" className="lx-btn"><i className="fas fa-save"></i>&nbsp;&nbsp;Save</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>


    )
}

export default AdminProfile