ก็แค่บอทข้อความยินดีต้อนรับแหละ เขียนด้วย Next JS ทำไม??

## เริ่มต้น

ใส่ ENV ให้เรียบร้อย โดยเอา Channel access token มาจาก Line Messaging API ใน LINE devloper console 
```
.env
MSG_TOKEN={Channel access token}
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

แล้วห็แก้ไขข้อความได้ในโฟเดอร์ app/api/route.js

## หา Docs อ่าน

- [LINE API](https://developers.line.biz/en/reference/messaging-api)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.