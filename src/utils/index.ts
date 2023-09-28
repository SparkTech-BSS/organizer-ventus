export const addEventOnElem = function (elem: any, type: any, callback: any) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i]?.addEventListener(type, callback);
    }
  } else {
    elem?.addEventListener(type, callback)!;
  }
};

export const removeEventOnElem = function (
  elem: any,
  type: any,
  callback: any
) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i]?.removeEventListener(type, callback);
    }
  } else {
    elem?.removeEventListener(type, callback)!;
  }
};

