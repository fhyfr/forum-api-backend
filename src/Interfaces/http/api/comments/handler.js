class CommentsHandler {
  constructor(container) {
    this._container = container;

    this.postNewCommentOnThreadHandler =
      this.postNewCommentOnThreadHandler.bind(this);
    this.deleteCommentFromThreadHandler =
      this.deleteCommentFromThreadHandler.bind(this);
  }

  async postNewCommentOnThreadHandler(request, h) {}
  async deleteCommentFromThreadHandler(request, h) {}
}

module.exports = CommentsHandler;
