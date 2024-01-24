import { fetchUsers } from '../../services/jsonplaceholder';

describe('jsonplaceholder', () => {
  it('should return users', async () => {
    const users = await fetchUsers();
    expect(users).toBeDefined();
  });
});
