var tape = require("tape"),
    d3 = Object.assign({}, require("../"), require("d3-array"));

require("./inDelta");

tape("randomUniform() returns random numbers with a mean of 0.5", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.5233099016390388));
  test.inDelta(d3.mean(d3.range(10000).map(randomUniform())), 0.5, .05);
  test.end();
});

tape("randomUniform() returns random numbers within the range [0,1)", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.6458793845385908));
  test.ok(d3.min(d3.range(10000).map(randomUniform())) >= 0);
  test.ok(d3.min(d3.range(10000).map(randomUniform())) < 1);
  test.end();
});

tape("randomUniform(max) returns random numbers with a mean of max / 2", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.678948531603278));
  test.inDelta(d3.mean(d3.range(10000).map(randomUniform(42))), 21, .5);
  test.end();
});

tape("randomUniform(max) returns random numbers within the range [0,max)", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.48468185818988196));
  test.ok(d3.min(d3.range(10000).map(randomUniform(42))) >= 0);
  test.ok(d3.min(d3.range(10000).map(randomUniform(42))) < 42);
  test.end();
});

tape("randomUniform(min, max) returns random numbers with a mean of (min + max) / 2", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.23751000425183233));
  test.inDelta(d3.mean(d3.range(10000).map(randomUniform(10, 42))), 26, .5);
  test.end();
});

tape("randomUniform(min, max) returns random numbers within the range [min,max)", function(test) {
  var randomUniform = d3.randomUniform.source(d3.randomLcg(0.3607454145271254));
  test.ok(d3.min(d3.range(10000).map(randomUniform(10, 42))) >= 10);
  test.ok(d3.min(d3.range(10000).map(randomUniform(10, 42))) < 42);
  test.end();
});
