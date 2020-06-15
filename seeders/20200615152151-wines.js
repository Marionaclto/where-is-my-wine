'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('wines', [{
      name: "Soques",
      classification: "Red",
      description: "Brilliant appearance, cherry red color moderately intense. Varied olfactory expression, although lightly intense. Aromas of tilia flower and thyme combined with pomegranate, pepper and charcoal. In the mouth it is expansive and vigorous, mineral and tannic, with a well integrated acidity that describes the structure of the wine. In the final part, notes of candied black fruit and garum persist in a light after-taste.",
      variety: "Red Granache 100%",
      image: "/img/soques.jpg"
    },{
      name: "s'alou",
      classification: "Aged red wine",
      description: "Visually, this wine offers a covered red garnet colour. Aromatic notes of blackberry jam, dried thyme, toasted bread, dates, cinnamon and quince on a slightly balsamic base. In the mouth, a subtle and delicate minerality, with a well-crafted structure where there are nuances of candied fruit, caramel, pistachio and coffee beans. Balanced and sturdy, but silky and providing a significantly prolonged persistence.",
      variety: "Grey Grenache 58%, Carignan 25%, Syrah 17%",
      image: "/img/s'alou.jpg"
    },{
      name: "Negre dels Aspres",
      classification: "Aged red wine",
      description: "Intense garnet red colour. Initial aromatic expression offers notes of forest herbs, coriander and candied red fruit. The subsequent aromatic hints of laurel, ground cinnamon, pepper grains, slate and roasted rind appear almost immediately, offering a good combination of primary and aging flavours. The palate is warm and alive, with very well balanced aspects of acidity, body, flavour, tannic structure and palate expression. It also conveys notes of cherry jam, syrup, cocoa and plums in brandy that slowly dissolve in a generous persistence.",
      variety: "Cabernet Sauvignon 36.6%, Red Grenache 26.4%, Syrah 21.3%, Carignan 15.7%",
      image: "/img/negre_dels_aspres.jpg"
    },{
      name: "Xot blanc dels Aspres",
      classification: "White",
      description: "Very clear and bright appearance, straw yellow color that hides light golden shades. The first aromatic impression is very expressive and fresh, giving notes of aniseed, mint, rose, peach and sweet bitches that culminate with touches of fresh butter and honey of flowers. Glycerol is offered in the mouth, with an integrated and determined acidity, well-structured and alive. The butter is found again, now in a citric context. A certain mineralization makes it slightly complex and it guides it to a post-taste that is dissolved in a subtle and pleasant bitter.",
      variety: "Sauvignon white 60%, Grenache white 30%, Picapoll 10%",
      image: "/img/xot_blanc.jpg"
    },{
      name: "Xot negre dels Aspres",
      classification: "Red",
      description: "Visually is intense red colour and edges garnets. The home side offers a fragrant blend of spices and ripe raspberry note, then incorporating hints of cocoa and honey jujube forest. In the mouth, wirh a very stable base acidity, spicy expression persists especially cinnamon, clove and star anise. Creamy vogorous and provides a note late candi sugar prior to a generous persistence.",
      variety: "Grenache noir 67%, Carignan 20%, Merlot 13%",
      image: "/img/xot_negre.jpg"
    },{
      name: "Blanc dels Aspres",
      classification: "Aged white wine",
      description: "Pale straw colour, with greenish reflections, brilliant and elegant. The first aromatic impression is a note of orange tree flower honey, and a very refreshing feeling. Then after a while, we get evident ripe mango, grated lemon peel and hanging tomato complemented with consistent aromas of brioche, pistachios and baked apple. Once in the mouth, it is fleshy and structured, with good acid base, on which you can taste hints of blood orange, stone peach and biscuit ice cream.",
      variety: "White grenache noir 100%",
      image: "/img/blanc_dels_aspres.jpg"
    },{
      name: "Oriol dels Aspres",
      classification: "Young white",
      description: "A lively yellow colour, clean and brilliant. Aromatically it offers a herbal base of fresh fennel, coriander and even vegetable garden, specially the tomato plant. In mouth, the vegetal aspect is confirmed making it refreshing, along with a well defined acidity adding up to its liveliness. Lightly creamy, with a touch of lemon peel and fresh pine nut that complement the whole.",
      variety: "White Grenache 74%, Grey Grenache 26%",
      image: "/img/oriol_blanc_dels_aspres.jpg"
    },{
      name: "Istiu",
      classification: "White",
      description: "The appearance is of a golden yellow color, modrately intense and elegant. Olfactory of dynamic expression with balsamic base and aromatic touches of caramelised apple, toothed sauce, vanilla and orang peel. Once in the mouth, a consistent and creamy texture takes cente stage, which consolidates a vigorous wine, of some astringency, at the same time refreshing, almost voluptuous. The final part grants a quince note that briefly returns to the candied aromas of the benginning.",
      variety: "White Grenache 100%",
      image: "/img/istiu.jpg"
    }]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('wine', null, {});
  }
};
