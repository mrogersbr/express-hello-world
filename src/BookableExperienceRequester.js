class BookableExperienceRequester {

   #bookableExperience; //[BookableExperience, BookableExperience, ]

   constructor(bookableExperience) {
      this.#bookableExperience = bookableExperience;
   }

   search(dateArray) {

      let httpResponses = [];

      dateArray.forEach((date, i) => {
         this.#bookableExperience.forEach((bookableExperience, i) => {

            let xhr = new XMLHttpRequest();
            let url = bookableExperience.getInterpolateURL(['${data}'], [date]);
            xhr.open("GET", url, false);

            try {
               xhr.send(null);
            } catch(e) {
               window.open(bookableExperience.url,'_self');
            }

            httpResponses.push([bookableExperience.description, date, xhr.responseText);

         });
      });

      return httpResponses; //[[bookableExperience.description(), date, xhr.responseText], [bookableExperience.description(), date, xhr.responseText], ...]
   }
}

module.exports = BookableExperienceRequester;
