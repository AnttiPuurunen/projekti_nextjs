const convertUtcToLocalTime = (dateandtime) => {
    return new Date(dateandtime).toLocaleString("fi-FI");
};

export default convertUtcToLocalTime