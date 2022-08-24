export class TaskQueue<T = any> {
  private pendingPromise = false;
  private readonly tasks: {
    action: () => T;
    resolve: (value: unknown) => void;
    reject: (reason?: any) => void;
  }[] = [];

  enqueue(action: () => T) {
    return new Promise(async (resolve, reject) => {
      this.tasks.push({ action, resolve, reject });
      await this.dequeue();
    });
  }

  async dequeue() {
    if (this.pendingPromise) return false;
    let item = this.tasks.shift();
    if (!item) return false;
    try {
      this.pendingPromise = true;
      let payload = await item.action();
      this.pendingPromise = false;
      item.resolve(payload);
    } catch (e) {
      this.pendingPromise = false;
      item.reject(e);
    } finally {
      await this.dequeue();
    }
    return true;
  }
}
