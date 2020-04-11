const expiryTime = 5 * 60 * 1000; // 5 minutes

const cache = [];

const isInTime = time => time + expiryTime > Date.now();

export const isCached = key => {
  if (cache[key]) {
    return isInTime(cache[key].created);
  }

  return false;
};

export const getCache = key => {
  if (cache[key]) {
    return cache[key].value;
  }

  return;
};

export const putCache = (key, value) => {
  cache[key] = {
    created: Date.now(),
    value,
  };
};
