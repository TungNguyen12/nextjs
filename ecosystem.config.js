module.exports = {
  apps: [
    {
      script: 'npm start',
      watch: '.',
    },
  ],

  deploy: {
    production: {
      key: 'C:/Users/nvtun/Downloads/airbnb.pem',
      user: 'ec2-user',
      host: '35.174.153.229',
      ref: 'origin/main',
      repo: 'https://github.com/TungNguyen12/nextjs.git',
      path: '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build pm2 startOrReload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
}
