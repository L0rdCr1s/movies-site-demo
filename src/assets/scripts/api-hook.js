import axios from 'axios';
import {useState} from 'react';

export const useGet = ({link}) => {
    // Configure request state
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState();
    const [data, setData] = useState(false);
    const [called, setCalled] = useState(false);

    let isRequesting = (state) => {
        setCalled(state);
        setLoading(state);
        setErrors(undefined);
    };

    let callback = async ({variables}) => {
        // update request state
        isRequesting(true);

        // create api link from data
        let API_LINK = `${link}?`;

        for (const prop in variables) {
            API_LINK += `${prop}=${variables[prop]}`;
        }
        console.log(API_LINK)
        // axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
        // make api call
        return await fetch(API_LINK).then(response => {
                // !response.data.errors
                //     ? setData(response.data.data)
                //     : setErrors(response.data.errors[0].message);
                console.log(response);
                isRequesting(false);
            })
            .catch(_error => {
                _error.response ? setErrors('server-error') : setErrors('app-error');
                isRequesting(false);
            });
    };

    return [callback, {loading, error, data, called}];
};
