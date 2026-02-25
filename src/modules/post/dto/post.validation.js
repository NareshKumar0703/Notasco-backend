import Joi from "joi";

const createPost = {
  body: Joi.object().keys({
    author: Joi.object().keys({
      name: Joi.string().trim().required(),
    }).required(),

    content: Joi.string().trim().max(2000).required(),

    likes: Joi.number().integer().min(0).default(0),

    comments: Joi.number().integer().min(0).default(0),

    likedBy: Joi.array().items(Joi.string().hex().length(24)),

    visibility: Joi.string()
      .valid("PUBLIC", "PRIVATE", "FOLLOWERS")
      .default("PUBLIC"),

    isDeleted: Joi.boolean().default(false),
  }),
};

const updatePost = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),

  body: Joi.object().keys({
    author: Joi.object().keys({
      name: Joi.string().trim(),
    }),

    content: Joi.string().trim().max(2000),

    likes: Joi.number().integer().min(0),

    comments: Joi.number().integer().min(0),

    likedBy: Joi.array().items(Joi.string().hex().length(24)),

    visibility: Joi.string().valid("PUBLIC", "PRIVATE", "FOLLOWERS"),

    isDeleted: Joi.boolean(),
  }),
};

const toggleLike = {
  params: Joi.object().keys({
    id: Joi.string().required(),
  }),

  body: Joi.object().keys({
    userId: Joi.string().hex().length(24).required(),
  }),
};

export default {
  createPost,
  updatePost,
  toggleLike,
};