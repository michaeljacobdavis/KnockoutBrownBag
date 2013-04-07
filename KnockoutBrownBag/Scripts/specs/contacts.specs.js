describe('Person', function() {
    describe('Full Name', function() {
        it('should join first and last name with a space in between', function() {
            var person = new Person();
            person.first('Mike');
            person.last('Davis');
            expect(person.fullName()).toBe('Mike Davis');
        });
    });
});