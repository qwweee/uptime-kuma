-- You should not modify if this have pushed to Github, unless it does serious wrong with the db.
BEGIN TRANSACTION;

ALTER TABLE monitor
    ADD response_time_limit INTEGER DEFAULT 0;

COMMIT;
