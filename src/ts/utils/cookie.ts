export default new (class Cookie {
  set(cookieName: string, value: string) {
    document.cookie = `${cookieName}=${value};max-age=31536000;path=/`;
  }
  get(cookieName: string) {
    return document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith(`${cookieName}=`))
      ?.split("=")[1];
  }
})();
