import asyncio
import cv2  # Make sure OpenCV is installed
import base64
from channels.generic.websocket import AsyncWebsocketConsumer

class VideoStreamConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        self.capture = cv2.VideoCapture(0)  # Change the source if needed

        while True:
            ret, frame = self.capture.read()
            if not ret:
                break

            _, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = base64.b64encode(buffer).decode('utf-8')
            await self.send(text_data=frame_bytes)
            await asyncio.sleep(0.05)  # Adjust for frame rate control

    async def disconnect(self, close_code):
        if self.capture:
            self.capture.release()
