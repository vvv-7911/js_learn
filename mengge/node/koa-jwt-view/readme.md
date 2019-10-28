## JWT
Header:
sha256: 哈希算法
`` {
  "alg": "HS256",
  "typ": "JWT"
}
``
part1: base64(header) 编码完的
base64: 用 64 个字符表示 A-Za-z0-9

Payload: 
`` {
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
``
part2: base64(payload)

Signature: 
part3: sha256(part1 + part2, 'secret')

完整： part1.part2.part3