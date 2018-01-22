const metaIdentityClaims = require('../dist/meta-identity-claims')

const account = require('./fixtures/account.json')
const claim = require('./fixtures/claim.json')

describe('@meta.js/identity-claims :: signMessage', () => {
  it('Should return signature of message', () => {
    const message = claim.claimMessage
    const { privateKey } = account

    const actual = metaIdentityClaims.signMessage(message, privateKey)
    const expected = claim.signature

    expect(actual).toEqual(expected)
  })

  it('Should throw an error if message is undefined', () => {
    const actual = () => metaIdentityClaims.signMessage()

    expect(actual).toThrow()
  })

  it('Should throw an error if message is not of type string', () => {
    const message = { message: claim.claimMessage }

    const actual = () => metaIdentityClaims.signMessage(message)

    expect(actual).toThrow()
  })

  it('Should throw an error if privateKey is undefined', () => {
    const actual = () => metaIdentityClaims.signMessage(claim.claimMessage)

    expect(actual).toThrow()
  })

  it('Should throw an error if privateKey is not of type string', () => {
    const privateKey = { privateKey: account.privateKey }

    const actual = () =>
      metaIdentityClaims.signMessage(claim.claimMessage, privateKey)

    expect(actual).toThrow()
  })
})
