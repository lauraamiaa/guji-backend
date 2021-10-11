"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "coffees",
      [
        {
          name: "Brazil",
          shortDescription:
            "a sweet and smooth coffee with notes of milk chocolate and hazelnuts",
          longDescription:
            "Brazil is the world's leading grower and exporter of coffee beans, with a mellow flavour that makes for a very typical dark roast. If you like coffee that tastes like roasted nuts, caramel, and graham crackers, these are the coffee beans for you. This great high quality coffee is soft, nutty, with nice bittersweet chocolate tastes. Those who enjoy a smooth, mild cup of coffee would tend towards these Brazilian beans. Dark roast coffees taste how you think coffee tastes, reminiscent of an old-school diner cup, or what your parents make in the drip machine at home. And since the beans are roasted long enough to develop their oils and bring them to the surface, the body of your coffee will be thicker.",
          price: 7.5,
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ethiopia",
          shortDescription:
            "medium body coffee with fruity tones and bright acidity",
          longDescription:
            "The harvest of our Ethiopia Guji Natural hits all the characteristics of a classic Ethiopian coffee. This coffee delivers inimitable, sensitive and delicate flavours, almost floral and tea like. One can sense notes of jasmine flower, bergamot and blueberry in aftertaste. The body of the coffee is not very strong and acidity is mild and pleasant. Ethiopian Guji coffees offer a complex, yet balanced, cup profile that does well in both filter and espresso. All coffees from southern Ethiopia display an earthiness in the cup and this is of course no exception. There is still that dense medium bodied texture and a light chocolate aftertaste to balance out a super drinking experience.",
          price: 10,
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kenya",
          shortDescription:
            "complex taste profile complex with interesting fruity flavours",
          longDescription:
            "One reason a mug of Kenya coffee is known as one of the five best coffees in the world is that they have very distinctive flavours. Kenya offers some of the most intensely aromatic, brightly acidic coffees in the world. The taste profile is complex and possesses interesting fruity flavours and notes of berry. The aftertaste of a Kenya coffee may be quite dry with a lemony zest to it, or perhaps winey. Pause to appreciate the sublime, even intoxicating black currant undertones in the flavour and aroma.",
          price: 10,
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Columbia",
          shortDescription: "sweet and medium-bodied with a mellow acidity",
          longDescription:
            "Sweet and medium-bodied, Columbian coffees have the most recognisable coffee flavour to most North Americans. Our classic Colombian profile brings together a mellow acidity and a strong caramel sweetness, with a nutty undertone. The aromas are a little citrusy and fruity, and have hints of spice. Colombian coffees are known for being smooth and easy-drinking, which makes them ideal for mellowing out overbearing flavours in some other countries. The relatively mild flavour makes it a perfect choice for espressos - they can be roasted dark without turning overly bitter. ",
          price: 9,
          imageUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("coffees", null, {});
  },
};
