describe("API",function ()  {

    it("GET - OMDB ", function() {
        cy.request(
            "http://www.omdbapi.com/?apikey=244962c6&s=the good doctor&type=series"
        ).then((reponse) => {
            let body = reponse.body;
            expect(body.Search[0].Type).eq("series")
            expect(body.Search.length).eq(1)
            cy.log(body.Search.length)
            expect(body.Search).to.have.lengthOf(1);
        })
    
    })

})