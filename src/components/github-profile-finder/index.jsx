import { useEffect, useState } from "react";

import User from './user';
import './styles.css'




export default function GithubProfileFinder() {
    const [userName, setUserName] = useState('kanonkartik');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchGithubUserData() {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${userName}`);
            if (res.ok) {
                const data = await res.json();
                setUserData(data);
                setUserName("")
            } else {
                setError('Failed to fetch user data');
            }
        } catch (error) {
            setError('Failed to fetch user data');
        } finally {
            setLoading(false);
        }
    }

    function handleSearch() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <div><h1>Please wait...</h1></div>;
    }

    if (error) {
        return <div><h1>Error: {error}</h1></div>;
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    name="search-by-username"
                    type="text"
                    placeholder="Search Github Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {userData !== null ? <User user={userData} /> : null}
        </div>
    );
}
