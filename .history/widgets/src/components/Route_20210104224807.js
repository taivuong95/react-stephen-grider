import {useState, useEffect} from 'react';
const Route = ({ path, children }) => {
    useEffect(() => {
        const [currentPath, setCurrentPath] = useState(window.location.pathname);

        const onLocationChange = () => {
            console.log('Location changed');
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return window.location.pathname === path ? children : null;
};

export default Route;