import request from 'supertest';
import { makeApp } from '../../src/app';
import { beforeEach, describe, expect, it } from 'vitest';
import type { Express } from 'express';
import { NewNote } from '../../src/models/Note';

describe('GET /notes/:id - Ejercicio 3', () => {
  let app: Express;

  beforeEach(() => {
    app = makeApp(':memory:');
  });

  it('nota con id inexistente retorna 404', async () => {
    const res = await request(app).get('/notes/100');

    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error', 'NotFound');
  });

  it('nota con id existente la retorna correctamente', async () => {
    const newNote: NewNote = { title: 'ABC', content: 'DEF' };
    await request(app).post('/notes').send(newNote);

    const res = await request(app).get('/notes/1');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title', newNote.title);
    expect(res.body).toHaveProperty('content', newNote.content);
    expect(res.body).toHaveProperty('pinned', false);
  });
});
