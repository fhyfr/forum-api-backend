const routes = (handler) => {
  [
    {
      method: 'POST',
      path: '/threads/{threadId}/comments',
      handler: handler.postNewCommentOnThreadHandler,
    },
    {
      method: 'DELETE',
      path: '/threads/{threadId}/comments/{commentId}',
      handler: handler.deleteCommentFromThreadHandler,
    },
  ];
};

module.exports = routes;
