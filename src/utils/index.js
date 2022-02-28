const { REACT_APP_S3_BASEURL } = process.env

export const getImgUrl = name => REACT_APP_S3_BASEURL + name
