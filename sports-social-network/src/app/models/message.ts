export class Message {
    content: string;
    author: string;
    timestamp: string;
    type: string;
}

export const MessageType = {
    SENT: 'SENT',
    RECEIVED: 'RECEIVED'
};
