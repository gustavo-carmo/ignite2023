import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function MakeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Você recebeu uma nova solicitação de amizade'),
    recipientId: 'recipient-id',
    ...override,
  });
}
