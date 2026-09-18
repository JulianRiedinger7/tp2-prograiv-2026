import { NoteServiceImpl } from '../../src/services/NoteService';
import { SqliteNoteRepository } from '../../src/repositories/NoteRepository';
import { createDb } from '../../src/db/connection';
import { NewNote } from '../../src/models/Note';
import { beforeEach, describe, expect, it } from 'vitest';

describe ('NoteService delete Note - Ejericio 5', () => {
    let service: NoteServiceImpl;
    let repo: SqliteNoteRepository;

    beforeEach(() => {
    const db = createDb(':memory:');
    repo = new SqliteNoteRepository(db);
    service = new NoteServiceImpl(repo);
    });

    it ('Ingreso una nota por id y la elimino', () => {
        const notaNueva: NewNote = {title: 'TÍTULO', content: 'CONTENIDO'};
        const notaCreada = service.createNote(notaNueva);

        const notaParaEliminar= service.deleteNote(notaCreada.id);
        
    });

});