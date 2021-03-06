# `recoverAddressFromIdentityClaim()`

Recover Ethereum address from identity claim hash.

## Parameters

- `claimHash` `<String>` - `sha3` hash of claim message
- `signature` `<String>` - Ethereum RPC signature object

## Returns

- Recovered Ethereum public address hex `<String>`

## Example

```js
import { recoverAddressFromIdentityClaim } from '@kord.js/identity-claims'

recoverAddressFromIdentityClaim(
  '0xe864f1c2c17d143cfbc1ae68f2977e0068a2b13342f12834a4184c8a31d7b84f',
  '0x34e54b455a6700fcc784302815846dc10b84834bc03f07a3d58a7af91c8ca34910d0716b735c580675edfacb164a6e2f9b14a768cb6825b73c24eee2ed59d0e601'
)
// => 0xE4258268bf30F9540EeBfF7150148E387bcE0a2f
```
