import {useState} from 'react';

const get = ({link, variables}) => {
    /**
     * Format link url by adding the ? mark at the end and
     * then append the variables to the url to get a get request url */
    let API_LINK = `${link}?`;

    for (const prop in variables) {
        API_LINK += `${prop}=${variables[prop]}`;
    }

    return fetch(API_LINK);
}

const post = ({link, variables}) => {
    // implement post......
}

const api = ({link, method, variables}) => {
    /**
     * Call appropriate request method based on the method
     * parameter */
    return method === 'get'
        ? get({link, variables})
        : post({link, variables});
}

export const useApi = ({link, method}) => {
    /**
     * The useAPi hook is used to simplify basic request pattern. This
     * allows us to have clean components that focuses only on the view logic,
     * plus it allows us to have fewer code under one component
     *
     *
     * Initialize request states that will help track different
     * stages of the request*/
    const [loading, setLoading] = useState(false);
    const [error, setErrors] = useState(false);
    const [data, setData] = useState(false);
    const [called, setCalled] = useState(false);

    let isRequesting = (state) => {
        /**
         * Batch repetitive state updates under one
         * function to avoid calling multiple state update */
        setCalled(state);
        setLoading(state);
        setErrors(undefined);
    };

    let callback = async ({variables}) => {
        // update request state
        isRequesting(true);

        // make api call
        return await api({link, method: 'get', variables})
            .then(res => res.json())
            .then(res => {
                if (res.status === 'ok') {
                    setData(res.data);
                    setErrors(false);
                }
                isRequesting(false);
            })
            .catch(_error => {
                setErrors(true);
                isRequesting(false);
            });
    };

    return [callback, {loading, error, data, called}];
};
