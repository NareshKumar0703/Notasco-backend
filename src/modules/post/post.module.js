import router from './post.route.js';
import * as postService from './post.service.js';
import * as postController from './post.controller.js';

export const PostModule = {
  router,
  service: postService,
  controller: postController,
};

export default PostModule;