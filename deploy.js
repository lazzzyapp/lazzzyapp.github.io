import { publish } from 'gh-pages';
import { join } from 'path';

publish(join(process.cwd(), 'dist'), {
  depth: 1,
  logger(message) {
    console.log(message);
  },
}, (err) => {
  if (err) {
    throw err;
  }
  console.log('Site has been published.');
});
