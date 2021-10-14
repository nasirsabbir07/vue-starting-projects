const app = Vue.createApp({
  //template: '<h1>Hello {{firstName}}</h1>',
  //We don't need to only put the data variables in the template. We can also put it in the html

  //* we can use the data function to to hold data values
  data() {
    return {
      firstName: "Jhon",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },

  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      //window.console.log(results)
      /*This gives us a results array with random data. We can replace the static data with the results array information. */

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.mail = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

app.mount("#app");
