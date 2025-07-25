import LocalStore from '../../src/utils/localStore';
import { TASK_CACHE_KEY } from '../../src/constant';
import type { Task } from '../../src/types';

describe('LocalStore', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('saveTasks stores tasks in localStorage', () => {
    const tasks: Task[] = [{ id: '1', title: 'Test', completed: false }];
    LocalStore.saveTasks(tasks);
    const stored = localStorage.getItem(TASK_CACHE_KEY);
    expect(stored).toBe(JSON.stringify(tasks));
  });

  it('loadTasks retrieves tasks from localStorage', () => {
    const tasks: Task[] = [{ id: '1', title: 'Load test', completed: true }];
    localStorage.setItem(TASK_CACHE_KEY, JSON.stringify(tasks));
    const loaded = LocalStore.loadTasks();
    expect(loaded).toEqual(tasks);
  });

  it('loadTasks returns empty array if no tasks stored', () => {
    const loaded = LocalStore.loadTasks();
    expect(loaded).toEqual([]);
  });

  it('addTask prepends new task and saves', () => {
    const task1: Task = { id: '1', title: 'First', completed: false };
    const task2: Task = { id: '2', title: 'Second', completed: false };
    LocalStore.saveTasks([task1]);
    LocalStore.addTask(task2);
    const stored = JSON.parse(localStorage.getItem(TASK_CACHE_KEY) || '[]');
    expect(stored[0]).toEqual(task2);
    expect(stored[1]).toEqual(task1);
  });

  it('deleteTask removes the task by id', () => {
    const task1: Task = { id: '1', title: 'One', completed: false };
    const task2: Task = { id: '2', title: 'Two', completed: false };
    LocalStore.saveTasks([task1, task2]);
    LocalStore.deleteTask('1');
    const stored = JSON.parse(localStorage.getItem(TASK_CACHE_KEY) || '[]');
    expect(stored).toEqual([task2]);
  });

  it('updateTask replaces the task by id', () => {
    const task1: Task = { id: '1', title: 'Old', completed: false };
    LocalStore.saveTasks([task1]);
    const updatedTask: Task = { id: '1', title: 'Updated', completed: true };
    LocalStore.updateTask(updatedTask);
    const stored = JSON.parse(localStorage.getItem(TASK_CACHE_KEY) || '[]');
    expect(stored[0]).toEqual(updatedTask);
  });

  it('toggleTaskStatus toggles completed property', () => {
    const task1: Task = { id: '1', title: 'Toggle me', completed: false };
    LocalStore.saveTasks([task1]);
    LocalStore.toggleTaskStatus('1');
    let stored = JSON.parse(localStorage.getItem(TASK_CACHE_KEY) || '[]');
    expect(stored[0].completed).toBe(true);

    // Toggle again back to false
    LocalStore.toggleTaskStatus('1');
    stored = JSON.parse(localStorage.getItem(TASK_CACHE_KEY) || '[]');
    expect(stored[0].completed).toBe(false);
  });

  it('clearTasks removes tasks from localStorage', () => {
    const tasks: Task[] = [{ id: '1', title: 'Clear me', completed: false }];
    LocalStore.saveTasks(tasks);
    LocalStore.clearTasks();
    expect(localStorage.getItem(TASK_CACHE_KEY)).toBeNull();
  });
});
