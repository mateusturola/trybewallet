import md5 from 'crypto-js/md5';

const getGravatar = async (email) => {
  const hashEmail = md5(email).toString();
  const request = await fetch(`https://www.gravatar.com/avatar/${hashEmail}`);
  return request.url;
};

export default getGravatar;
