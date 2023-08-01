import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from "@nestjs/websockets";

@WebSocketGateway(89, {namespace : 'chat'})
export class ChatGateway{
    @WebSocketServer()
    server

    @SubscribeMessage('message')
    handleMessage(@MessageBody() message: string): void {
        this.server.emit('message', message);
    }
}