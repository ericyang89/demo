const config = {
  // extensions:".ts",
  presets: [
      '@babel/preset-typescript',
      ['@babel/preset-env', {targets: {node: 'current'}}],
  ]
};

module.exports=config;