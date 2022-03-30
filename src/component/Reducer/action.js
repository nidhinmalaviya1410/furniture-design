
export const selectedCaterory = payload => {
    console.log('payload', payload);
    return ({
        type: "CategorySelect",
        state: payload,
    })
};

export const addPathName = payload => {
    console.log('payload', payload);
    return ({
        type: "PathName",
        state: payload,
    })
};