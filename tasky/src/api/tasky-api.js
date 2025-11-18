// Client API for Tasky app to talk to server endpoints under /api/tasks

export async function getTasks() {
  const res = await fetch('/api/tasks');
  if (!res.ok) throw new Error(`getTasks failed: ${res.status}`);
  return res.json();
}

export async function addTask(task) {
  const res = await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error(`addTask failed: ${res.status}`);
  return res.json();
}

export async function updateTask(task) {
  const id = task._id || task.id;
  const res = await fetch(`/api/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
  if (!res.ok) throw new Error(`updateTask failed: ${res.status}`);
  return res.json();
}

export async function deleteTask(id) {
  const res = await fetch(`/api/tasks/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok && res.status !== 204) throw new Error(`deleteTask failed: ${res.status}`);
  return true;
}
