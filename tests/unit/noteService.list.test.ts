import { beforeEach, describe, it, expect } from 'vitest';
import { createDb } from '../../src/db/connection';
import { SqliteNoteRepository } from '../../src/repositories/NoteRepository';
import { NoteServiceImpl } from '../../src/services/NoteService';

describe('NoteService - listNotes', () => {
  let service: NoteServiceImpl;

  beforeEach(() => {
    const db = createDb(':memory:');
    const repo = new SqliteNoteRepository(db);
    service = new NoteServiceImpl(repo);
  });

  it('inicializa con lista vacia', () => {
    const notes = service.listNotes();
    expect(notes).toHaveLength(0);
  });
});
