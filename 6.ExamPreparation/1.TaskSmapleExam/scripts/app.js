(function () {
    require(['structures'], function (structures) {
        var bulgarianHeroesSection, greekHeroesSection, heroesContainer, superheroesSection;
        heroesContainer = structures.getContainer();

        superheroesSection = structures.getSection('Superheroes');
        heroesContainer.add(superheroesSection);
        superheroesSection.add(structures.getItem('Batman'))
                          .add(structures.getItem('Ironman'))
                          .add(structures.getItem('Superman'))
                          .add(structures.getItem('Wonderwoman'))
                          .add(structures.getItem('The Flash'))
                          .add(structures.getItem('Spiderman'))
                          .add(structures.getItem('Captain America'))
                          .add(structures.getItem('The Hulk'))
                          .add(structures.getItem('Green arrow'))
                          .add(structures.getItem('Green Lantern'));

        greekHeroesSection = structures.getSection('Greek Heroes');
        heroesContainer.add(greekHeroesSection);
        greekHeroesSection.add(structures.getItem('Ajax'))
                          .add(structures.getItem('Hercules'))
                          .add(structures.getItem('Jason'))
                          .add(structures.getItem('Perseus'))
                          .add(structures.getItem('Odysseus'));

        bulgarianHeroesSection = structures.getSection('Bulgarian Heroes');
        heroesContainer.add(bulgarianHeroesSection);
        bulgarianHeroesSection.add(structures.getItem('Hristo Botev'))
                              .add(structures.getItem('Vasil Levski'))
                              .add(structures.getItem('Chavdar Vyivoda'));

        console.dir(JSON.stringify(heroesContainer.getData()));



        /* Should produce:*/
        var actual = heroesContainer.getData();
        var expected = [{
            "title": "Superheroes",
            "items": [{ "content": "Batman" },
                      { "content": "Ironman" },
                      { "content": "Superman" },
                      { "content": "Wonderwoman" },
                      { "content": "The Flash" },
                      { "content": "Spiderman" },
                      { "content": "Captain America" },
                      { "content": "The Hulk" },
                      { "content": "Green arrow" },
                      { "content": "Green Lantern" }]
        },
         {
             "title": "Greek Heroes",
             "items": [{ "content": "Ajax" },
                       { "content": "Hercules" },
                       { "content": "Jason" },
                       { "content": "Perseus" },
                       { "content": "Odysseus" }]

         },
         {
             "title": "Bulgarian Heroes",
             "items": [{ "content": "Hristo Botev" },
                       { "content": "Vasil Levski" },
                       { "content": "Chavdar Vyivoda" }]
         }];

        console.dir(JSON.stringify(heroesContainer.getData()) == JSON.stringify(expected));
    });
}).call(this);

//# sourceMappingURL=app.map
