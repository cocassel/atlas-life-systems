// This component creates a navigation bar
import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect} from 'react-redux'

export function Navbar(props) {
    const { auth } = props;
    // console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper blue lighten-2">
            <div className="container">
                <Link to = '/' className = "left brand-logo">Atlas Life Systems</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)