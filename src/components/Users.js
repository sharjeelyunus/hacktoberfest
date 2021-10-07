import React from 'react';
import GitHubLogo from '../assets/githublogo.png';

const Users = ({ name, batch, major, github, favLang }) => {
    const githubUsername = github ? "https://github.com/" + github : "";
    return (
        <div className="user">
            <div className="user__details">
                <h1>{name}</h1>
                <p><strong>{major}</strong></p>
                <p>Batch: {batch}</p>
                <p>Favourite Language: {favLang}</p>
            </div>
            <div>
                <a href={githubUsername} target="_blank" rel="noreferrer">
                    <img src={GitHubLogo} alt="" />
                </a>
            </div>
        </div>
    )
}

export default Users;
