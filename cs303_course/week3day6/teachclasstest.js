/*eslint-disable*/

describe("Check intialiazer methods is working",function()
{
    it ("check given name and age ",function()
    {
        assert.equal(Person.prototype.initialize("kasa"),this.name);
        assert.equal(Person.prototype.initialize(27),this.age);
    });

});
describe("Test teacher methods",function()
{
    it ("check the teacher name and course ",function()
    {
        assert.equal(teacher.prototype.teach("kasa"),this.name);
        assert.equal(teacher.prototype.teach(27),this.age);
        assert.equal(teacher.prototype.teach("OOP"),this.subject)
    });

});
describe("Test student Methods",function()
{
    it ("check the name and course taking ",function()
    {
        assert.equal(Student.prototype.learn("laaleme"),this.name);
        assert.equal(Student.prototype.learn(22),this.age);
        assert.equal(Student.prototype.learn("OOP"),this.subject)
    });

});