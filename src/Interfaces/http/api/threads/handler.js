class ThreadsHandler {
  constructor(container) {
    this._container = container;

    this.postThreadHandler = this.postThreadHandler.bind(this);
  }

  async postThreadHandler(request, h) {}

  async getDetailThreadHandler(request, h) {}
}

module.exports = ThreadsHandler;
