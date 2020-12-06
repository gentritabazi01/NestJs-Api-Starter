import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent, RemoveEvent } from 'typeorm';
import { User } from '../entities/user.entity';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  /**
   * Called after user is loaded.
   */
  afterLoad(entity: User) {
    console.log(`AFTER USER LOADED: `, entity);
  }

  /**
   * Called before user insertion.
   */
  beforeInsert(event: InsertEvent<User>) {
    console.log(`BEFORE USER INSERTED: `, event.entity);
  }

  /**
   * Called after user insertion.
   */
  afterInsert(event: InsertEvent<User>) {
    console.log(`AFTER USER INSERTED: `, event.entity);
  }

  /**
   * Called before user update.
   */
  beforeUpdate(event: UpdateEvent<User>) {
    console.log(`BEFORE USER UPDATED: `, event.entity);
  }

  /**
   * Called after user update.
   */
  afterUpdate(event: UpdateEvent<User>) {
    console.log(`AFTER USER UPDATED: `, event.entity);
  }

  /**
   * Called before user removal.
   */
  beforeRemove(event: RemoveEvent<User>) {
    console.log(`BEFORE USER WITH ID ${event.entityId} REMOVED: `, event.entity);
  }

  /**
   * Called after user removal.
   */
  afterRemove(event: RemoveEvent<User>) {
    console.log(`AFTER USER WITH ID ${event.entityId} REMOVED: `, event.entity);
  }
}