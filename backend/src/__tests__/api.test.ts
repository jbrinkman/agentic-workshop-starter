import request from 'supertest';
import app from '../index';
import { resetItems } from '../controllers/itemController';

describe('API Endpoints', () => {
  beforeEach(() => {
    resetItems();
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('status', 'ok');
      expect(response.body).toHaveProperty('timestamp');
    });
  });

  describe('GET /api/items', () => {
    it('should return all items', async () => {
      const response = await request(app).get('/api/items');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body).toHaveProperty('data');
      expect(Array.isArray(response.body.data)).toBe(true);
    });
  });

  describe('POST /api/items', () => {
    it('should create a new item', async () => {
      const newItem = {
        name: 'Test Item',
        description: 'Test Description',
      };

      const response = await request(app).post('/api/items').send(newItem);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('name', newItem.name);
      expect(response.body.data).toHaveProperty('description', newItem.description);
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data).toHaveProperty('createdAt');
    });

    it('should return error when name is missing', async () => {
      const response = await request(app).post('/api/items').send({ description: 'No name' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('GET /api/items/:id', () => {
    it('should return a specific item', async () => {
      // First create an item
      const createResponse = await request(app)
        .post('/api/items')
        .send({ name: 'Test', description: 'Test' });

      const itemId = createResponse.body.data.id;

      // Then fetch it
      const response = await request(app).get(`/api/items/${itemId}`);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('id', itemId);
    });

    it('should return 404 for non-existent item', async () => {
      const response = await request(app).get('/api/items/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('success', false);
    });
  });
});
