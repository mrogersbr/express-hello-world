class BookableExperience {

   #description;
   #url;
   #urlTemplateString;

   constructor(description, url, urlTemplateString) {

      this.#description = description;
      this.#url = url;
      this.#urlTemplateString = urlTemplateString;

   }

   get description() {
      return this.#description;
   }

   get url() {
      return this.#url;
   }

   getInterpolateURL(params, values) { //[params] [values] -> params.length == values.length

      params.forEach((param, i) => {
         this.#urlTemplateString = this.#urlTemplateString.replaceAll(param, values[i]);
      });

      return this.#urlTemplateString;
   }

}

module.exports = BookableExperience;
