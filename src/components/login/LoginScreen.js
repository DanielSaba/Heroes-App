import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import '../../style.css';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Dasaba'
            }
        });

        history.replace( lastPath );
        
    }

    return (
        <div className="container-login">
            <div className="container__div">
                <h1>Login</h1>
                
                <button
                    className="btn btn-success"
                    onClick={ handleLogin }
                >
                    Login
                </button>
            </div>
            
            
        </div>
    )
}
