module.exports = function(eleventyConfig) {
  // Copy the static folder to the output
  eleventyConfig.addPassthroughCopy("static");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};