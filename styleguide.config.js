module.exports = {
	// set your styleguidist configuration here
	title: 'Default Style Guide',
	defaultExample: true,
	components: 'src/components/**/[A-Z]*.vue',
	ribbon: {
		text: 'Back to examples',
		url: 'https://vue-styleguidist.github.io/Examples.html'
	},
	styleguideDir: 'dist',
	template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro'
        }
      ]
    }
  },
	theme: {
    fontFamily: {
      base: '"Source Sans Pro", "helvetica neue", helvetica, sans-serif'
    }
  }
	// sections: [
	//   {
	//     name: 'First Section',
	//     components: 'src/components/**/[A-Z]*.vue'
	//   }
	// ],
	// webpackConfig: {
	//   // custom config goes here
	// }
}
