import { MakeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count Recipient Notifications', () => {
  it(' should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );
    const recipientId = 'recipient-1';

    await notificationsRepository.create(MakeNotification({ recipientId }));
    await notificationsRepository.create(MakeNotification({ recipientId }));
    await notificationsRepository.create(
      MakeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId,
    });

    expect(count).toEqual(2);
  });
});
