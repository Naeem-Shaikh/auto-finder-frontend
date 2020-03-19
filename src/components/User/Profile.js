import React from 'react'
import { getUser } from '../../services/userService'
import { Link } from 'react-router-dom'

const imageBaseURL = 'https://autofinder-car-images.s3.us-east-2.amazonaws.com/'
class Profile extends React.Component {
    state = {
        user: []
    }

    componentDidMount = async () => {
        const res = await getUser()
        this.setState({ user: res.data })

    }
    render() {


        return (
            <div className='container'>
                <div className="alert alert-info" role="alert">
                    <h3>  Welcome {(this.props.user.name)}...!!!</h3>


                    <div className="row row-cols-1 row-cols-md-3">

                        <div className="card mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={imageBaseURL + this.state.user._id} className="card-img" alt="..." />

                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{this.state.user.name}</h5>
                                        <p className="card-text">{this.state.user.email}</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>

                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Link className='btn btn-outline-info' to={`/dashboard/carpic/${this.state.user._id}`}>Add Image</Link>
                                    </div>
                                    <div className="col">
                                        <Link className='btn btn-outline-primary' to={`/register/${this.state.user._id}`} > Edit Profile</Link>
                                    </div>
                                    <div className="col">
                                        <Link className='btn btn-outline-warning' to={`/password/${this.state.user._id}`} > Password</Link>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="col mb-4">
                            <div className="card">
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Car Posted</h5>
                                    <p className="card-text"> This content is a little bit longer.</p>

                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Profile