# Task queue

Implementation of the [Queue](<https://en.wikipedia.org/wiki/Queue_(abstract_data_type)>) data structure for sequential execution of asynchronous tasks.

In computer science, a queue is a collection of entities that are maintained in a sequence and can be modified by the addition of entities at one end of the sequence and the removal of entities from the other end of the sequence. By convention, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue, analogously to the words used when people line up to wait for goods or services.

## Behavior:

1. Every time a new task is queued, the `dequeue()` function is called.
   1. if queue is empty, `return false` (exit recursion).
   2. if the queue is busy, `return false` (previous job failed).
   3. on task completion (success or failure) recursive call to `dequeue()` (until the queue is empty).

### Source:

- [Stack Overflow](https://stackoverflow.com/questions/53540348/js-async-await-tasks-queue)
