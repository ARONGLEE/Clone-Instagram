const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
  console.log("aaa", document.cookie);
};

const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();

  console.log(date);

  document.cookie = name + "=; expires=" + date;
  console.log("bbb", document.cookie);
};

export { setCookie, deleteCookie };
