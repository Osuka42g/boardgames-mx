import stringSimilarity from 'string-similarity';

export const byPrice = (a, b) => {
  if (a.price < b.price) {
    return -1;
  }
  if (a.price > b.price) {
    return 1;
  }
  return 0;
};

export const byRelation = (a, b) => {
  if (a.relation < b.relation) {
    return 1;
  }
  if (a.relation > b.relation) {
    return -1;
  }
  return 0;
};

export const relation = (first, second) => {
  return stringSimilarity.compareTwoStrings(first, second);
}

const isHttpx = str => str.startsWith('http') || str.startsWith('https');

export const validateItemsObject = ({
  title,
  image,
  shopURL,
  price,
  vendor,
}) => {
  if (!title || !image || !shopURL || !vendor || !price) {
    return false;
  }
  if (!isHttpx(image) || !isHttpx(shopURL)) {
    return false;
  }
  if (Number(price) == NaN) {
    return false;
  }

  return true;
};

// from perry-mitchell code: https://gist.github.com/perry-mitchell/dfe8becce634689206725af318b44445
export function promiseAllTimeout(promises, timeout, resolvePartial = true) {
  return new Promise(function (resolve, reject) {
    let results = [],
      finished = 0,
      numPromises = promises.length;
    let onFinish = function () {
      if (finished < numPromises) {
        if (resolvePartial) {
          (resolve)(results);
        } else {
          throw new Error("Not all promises completed within the specified time");
        }
      } else {
        (resolve)(results);
      }
      onFinish = null;
    };
    for (let i = 0; i < numPromises; i += 1) {
      results[i] = undefined;
      promises[i].then(
        function (res) {
          results[i] = res;
          finished += 1;
          if (finished === numPromises && onFinish) {
            onFinish();
          }
        },
        reject
      );
    }
    setTimeout(function () {
      if (onFinish) {
        onFinish();
      }
    }, timeout);
  });
}
