import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const getToken = async () => {
            // console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://serene-peak-34256.herokuapp.com/login', { email });
                // console.log(data);
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken); // localStorage isn't the best place to set accessToken, we can set it in the cookies for extra-security.
            }
        }
        getToken();
    }, [user]);

    return [token, setToken];
}

export default useToken;