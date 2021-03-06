var tape = require("tape"),
    d3 = Object.assign({}, require("../"), require("d3-array")),
    skewness = require("./skewness"),
    kurtosis = require("./kurtosis");

require("./inDelta");

tape("d3.randomBates(n) returns random numbers with a mean of one-half", function(test) {
  var randomBates = d3.randomBates.source(d3.randomLcg(0.6351090615932817));
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(1))), 0.5, 0.05);
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(10))), 0.5, 0.05);
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(1.5))), 0.5, 0.05);
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(4.2))), 0.5, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a variance of 1 / (12 * n)", function(test) {
  var randomBates = d3.randomBates.source(d3.randomLcg(0.1284832084868286));
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(1))), 1 / 12, 0.05);
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(10))), 1 / 120, 0.05);
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(1.5))), 1 / 18, 0.05);
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(4.2))), 1 / 50.4, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a skewness of 0", function(test) {
  var randomBates = d3.randomBates.source(d3.randomLcg(0.051567609139606674));
  test.inDelta(skewness(d3.range(10000).map(randomBates(1))), 0, 0.05);
  test.inDelta(skewness(d3.range(10000).map(randomBates(10))), 0, 0.05);
  test.inDelta(skewness(d3.range(10000).map(randomBates(1.5))), 0, 0.05);
  test.inDelta(skewness(d3.range(10000).map(randomBates(4.2))), 0, 0.05);
  test.end();
});

tape("d3.randomBates(n) returns random numbers with a kurtosis of -6 / (5 * n)", function(test) {
  var randomBates = d3.randomBates.source(d3.randomLcg(0.696913354780724));
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(1))), -6 / 5, 0.05);
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(10))), -6 / 50, 0.1);
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(1.5))), -6 / 7.5, 0.05);
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(4.2))), -6 / 21, 0.05);
  test.end();
});

tape("d3.randomBates(0) is equivalent to d3.randomUniform()", function(test) {
  var randomBates = d3.randomBates.source(d3.randomLcg(0.7717596603725383));
  test.inDelta(d3.mean(d3.range(10000).map(randomBates(0))), 0.5, 0.05);
  test.inDelta(d3.variance(d3.range(10000).map(randomBates(0))), 1 / 12, 0.05);
  test.inDelta(skewness(d3.range(10000).map(randomBates(0))), 0, 0.05);
  test.inDelta(kurtosis(d3.range(10000).map(randomBates(0))), -6 / 5, 0.05);
  test.end();
});
