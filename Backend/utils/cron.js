import cron from 'node-cron';
import Post from '../models/post.model.js';

cron.schedule('* * * * *', async () => {
  console.log('Checking for scheduled posts...');

  try {
    const now = new Date();

    const postsToPublish = await Post.find({
      scheduledTime: { $lte: now },
      published: false
    });

    for (const post of postsToPublish) {
      console.log(`Publishing post: ${post._id} to ${post.platform}`);

      post.published = true;
      await post.save();
    }

    console.log('Scheduled posts check complete.');
  } catch (error) {
    console.error('Error checking scheduled posts:', error);
  }
});
