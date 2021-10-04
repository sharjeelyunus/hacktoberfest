import React, { Component } from 'react';
import profiles from '../profiles.json';
import Users from './Users';

class FetchUser extends Component {
    render() {
        return (
            <div className="profiles">
                {profiles.map((data) => {
                    return (
                        <Users
                            name={data.name}
                            batch={data.batch}
                            major={data.major}
                            github={data.githubUsername}
                            favLang={data.favoriteLanguage}
                        />
                    )
                })}
            </div>
        )
    }
}

export default FetchUser;