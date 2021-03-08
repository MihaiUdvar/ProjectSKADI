class customHTTPMethods{
   async get(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
   }
}

export const http = new customHTTPMethods();
