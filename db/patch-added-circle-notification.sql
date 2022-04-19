-- You should not modify if this have pushed to Github, unless it does serious wrong with the db.
BEGIN TRANSACTION;

ALTER TABLE monitor
    ADD notification_circle INTEGER NOT NULL DEFAULT 10;

ALTER TABLE heartbeat
    ADD circle_count INTEGER NOT NULL DEFAULT 0;

COMMIT;
