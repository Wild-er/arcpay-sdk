import type { PublicNetwork } from '@/lib/algod/networks.config'

type ContractNames = 'clear'
| 'arc200_arc72_dutch_approval'
| 'arc200_arc72_sale_approval'
| 'arc200_arc72_auction_approval'
| 'arc200_rwa_sale_approval'
| 'voi_arc72_dutch_approval'
| 'voi_arc72_sale_approval'
| 'voi_arc72_auction_approval'
| 'voi_rwa_sale_approval'
| 'algo_ASA_sale_approval'
| 'algo_ASA_auction_approval'
| 'algo_ASA_dutch_approval'
| 'algo_rwa_sale_approval'
| 'ASA_ASA_sale_approval'
| 'ASA_ASA_auction_approval'
| 'ASA_ASA_dutch_approval'
| 'ASA_rwa_sale_approval'

type ContractTags = 'latest'

type ContractId = `${PublicNetwork}:${ContractNames}:${ContractTags}`

type Contracts = {
  [key: string]: string
}

const contracts: Contracts = {
  'voi:testnet:clear:latest': 'CoEBQw==',
  'algo:testnet:clear:latest': 'CoEBQw==',
  'voi:testnet:arc200_arc72_dutch_approval:latest': 'CiAGAAEGZAIYJg8JbWF4X3ByaWNlBXN0YXJ0A2VuZBJjb3VudGVyX3BhcnR5X2ZlZXMNYXJjMjAwX2FwcF9pZAltaW5fcHJpY2UJbWFpbl9mZWVzCm5mdF9hcHBfaWQGbmZ0X2lkEmFyYzIwMF9hcHBfYWRkcmVzcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzcwTacCW5MRgiEkABGDEZgQUSQADsMRkiEjYaAIAEZnVuZBIQQAC5MRkiEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAJ0xGSISNhoAgANidXkSEEAAFjEZIxIxGSEEEhExGYEEEhFAAAEAIkM2GgEXKGQoZCcFZAkyBylkCQsqZClkCQoJDzIHKmQOEEQ2GgEXJwZkK2QICyUKNhoBFytkCyUKiAGPiAE4NhoBFzYaARcnBmQrZAgLJQoJMgmIAVMxAIgBwiKAEGR1dGNoLGJ1eSwyMDAvNzKIAR6IAO4jQyJDI0MxADIJEkQigBNkdXRjaCxjcmVhdGUsMjAwLzcyiAD2I0MigBNkdXRjaCxjYW5jZWwsMjAwLzcyiADbMQAyCRJEiAClI0MnBzYaABdnJwg2GgFnKDYaAhdnJwU2GgMXZyo2GgQXZycENhoFF2cnCTYaBmcnCjYaB2crNhoIF2cpMgdnJwuAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZyhkJwVkDUQqZClkDUQnBiEEZycMgY7YlRpnJw2AINluspI8SXkn1DKU35saZaYkPvIOJnmOTrzM4nJGes+GZyNDigAAMgpgIhNBAAmxI7IQMgmyCbOJigAAsSOyEIHU3gGyCDIKsgAnCWSyB7OJigIAsSOyEIv+sggyCrIAJw1ksgeL/7IFs4mKAgCxJLIQJwRkshgishknDrIai/+yGiEFr4v+FlCyGrOJigIAsSSyECcEZLIYIrIZJw6yGicLZLIaIQWvi/4WULIatiSyECcMZLIYIrIZgA9hZGRfYXJjMjAwX2ZlZXOyGicKZLIai/8WshonBGQWshqziYoBALEkshAnB2SyGCKyGYAE8vGUoLIaMgmyGov/shonCGSyGrOJ',
  'voi:testnet:arc200_arc72_sale_approval:latest': 'CiAGAAEGZAIYJgwFcHJpY2USY291bnRlcl9wYXJ0eV9mZWVzDWFyYzIwMF9hcHBfaWQJbWFpbl9mZWVzCm5mdF9hcHBfaWQGbmZ0X2lkEmFyYzIwMF9hcHBfYWRkcmVzcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzcwTacCW5MRgiEkABMzEZgQUSQAEIMRkiEjYaAIAEZnVuZBIQQADWMRkiEjYaAIAMdXBkYXRlX3ByaWNlEhBAAI0xGSISNhoAgAxwcmVfdmFsaWRhdGUSEEAAcTEZIhI2GgCAA2J1eRIQQAAWMRkjEjEZIQQSETEZgQQSEUAAAQAiQyKAD3NhbGUsYnV5LDIwMC83MogBWShkK2QpZAgLJQooZClkCyUKiAGAiAEqKGQoZCtkKWQICyUKCTIJiAFKMQCIAbaIAPsjQyNDI0MxADIJEjYaARciDRBEIoASc2FsZSx1cGRhdGUsMjAwLzcyiAD9KDYaARdnI0MiQzEAMgkSRCKAEnNhbGUsY3JlYXRlLDIwMC83MogA1SNDIoASc2FsZSxjYW5jZWwsMjAwLzcyiAC7MQAyCRJEiACFI0MnBDYaABdnJwU2GgFnKDYaAhdnKjYaAxdnJwY2GgRnJwc2GgVnKTYaBhdnJwiAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZyshBGcnCYGO2JUaZycKgCDZbrKSPEl5J9QylN+bGmWmJD7yDiZ5jk68zOJyRnrPhmcjQ4oAADIKYCITQQAJsSOyEDIJsgmziYoAALEjshCB1N4BsggyCrIAJwZksgeziYoCALEjshCL/rIIMgqyACcKZLIHi/+yBbOJigIAsSSyECpkshgishknC7Iai/+yGiEFr4v+FlCyGrOJigIAsSSyECpkshgishknC7IaJwhkshohBa+L/hZQshq2JLIQJwlkshgishmAD2FkZF9hcmMyMDBfZmVlc7IaJwdkshqL/xayGipkFrIas4mKAQCxJLIQJwRkshgishmABPLxlKCyGjIJshqL/7IaJwVkshqziQ==',
  'voi:testnet:arc200_arc72_auction_approval:latest': 'CiAGAAFkBgIYJhAKYmlkX2Ftb3VudAtiaWRfYWNjb3VudANlbmQSY291bnRlcl9wYXJ0eV9mZWVzDWFyYzIwMF9hcHBfaWQMZmVlc19hZGRyZXNzCW1haW5fZmVlcw5sYXRlX2JpZF9kZWxheQltaW5fcHJpY2UKbmZ0X2FwcF9pZAZuZnRfaWQSYXJjMjAwX2FwcF9hZGRyZXNzFWNvdW50ZXJfcGFydHlfYWRkcmVzcwtmZWVzX2FwcF9pZAxub3RlX2FkZHJlc3ME2nAluTEYIhJAAZgxGSISNhoAgARmdW5kEhBAAWMxGSISNhoAgAxwcmVfdmFsaWRhdGUSEEABRzEZIhI2GgCAA2JpZBIQQADHMRkiEjYaAIAFY2xvc2USEEAAWTEZgQUSQAAWMRkjEjEZIQQSETEZgQQSEUAAAQAiQzEAMgkSMQAnBWQSEUQigBVhdWN0aW9uLGNhbmNlbCwyMDAvNzKIAcgpZDIDE0AABYgBkCNDiAJsQv/1KWQyAxMqZDIHDhBEIoAUYXVjdGlvbixjbG9zZSwyMDAvNzKIAY8pZIgCGChkJwZkK2QICyQKKGQrZAskCogBsYgBWihkKGQnBmQrZAgLJAoJMgmIAXmIAS8jQzIHKmQMNhoBFycIZA8QNhoBFyhkIwgPEDYaARcoZIFuCyQKDxBEIoASYXVjdGlvbixiaWQsMjAwLzcyiAEcKWQyAxNAACMoNhoBF2cpMQBnMgcnB2QIKmQPQAACI0MqMgcnB2QIZ0L/84gBokL/1yNDMQAyCRJEIoAVYXVjdGlvbixjcmVhdGUsMjAwLzcyiADII0MnCTYaABdnJwo2GgFnJwg2GgIXZyo2GgMXZycENhoEF2cnCzYaBWcnDDYaBmcrNhoHF2cnBYAgzOrK6JBtKbOmGz0eFd2PHt66wMJPJDM5nA01bne8pNhnKTIDZycHgdgEZygiZycGIQRnJw2BjtiVGmcnDoAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnI0OKAAAyCmAiE0EACbEjshAyCbIJs4mKAACxI7IQgdTeAbIIMgqyACcLZLIHs4mKAgCxI7IQi/6yCDIKsgAnDmSyB4v/sgWziYoCALElshAnBGSyGCKyGScPshqL/7IaIQWvi/4WULIas4mKAgCxJbIQJwRkshgishknD7IaJwVkshohBa+L/hZQshq2JbIQJw1kshgishmAD2FkZF9hcmMyMDBfZmVlc7IaJwxkshqL/xayGicEZBayGrOJigEAsSWyECcJZLIYIrIZgATy8ZSgshoyCbIai/+yGicKZLIas4mKAAAoZClkiP9ciQ==',
  'voi:testnet:arc200_rwa_sale_approval:latest': 'CiAGAAFkBgIYJgoFcHJpY2USY291bnRlcl9wYXJ0eV9mZWVzDWFyYzIwMF9hcHBfaWQJbWFpbl9mZWVzEmFyYzIwMF9hcHBfYWRkcmVzcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzcwTacCW5MRgiEkABLTEZgQUSQAEBMRkiEjYaAIAEZnVuZBIQQADOMRkiEjYaAIAMdXBkYXRlX3ByaWNlEhBAAIQxGSISNhoAgAxwcmVfdmFsaWRhdGUSEEAAaDEZIhI2GgCAA2J1eRIQQAAWMRkjEjEZIQQSETEZgQQSEUAAAQAiQyhkK2QpZAgLJAooZClkCyQKiAGdiAFHKGQoZCtkKWQICyQKCTIJiAFnIoAQc2FsZSxidXksMjAwL3J3YYgBNyNDI0MxADIJEjYaARciDRBEIoATc2FsZSx1cGRhdGUsMjAwL3J3YYgBDSg2GgEXZyNDIkMxADIJEkQigBNzYWxlLGNyZWF0ZSwyMDAvcndhiADkI0MigBNzYWxlLGNhbmNlbCwyMDAvcndhiADJMQAyCRJEiACTI0MoNhoAF2eABG5hbWU2GgFngAtkZXNjcmlwdGlvbjYaAmcqNhoDF2cnBDYaBGcnBTYaBWcpNhoGF2cnBoAgzOrK6JBtKbOmGz0eFd2PHt66wMJPJDM5nA01bne8pNhnKyEEZycHgY7YlRpnJwiAINluspI8SXkn1DKU35saZaYkPvIOJnmOTrzM4nJGes+GZyNDigAAMgpgIhNBAAmxI7IQMgmyCbOJigAAsSOyEIHU3gGyCDIKsgAnBGSyB7OJigIAsSOyEIv+sggyCrIAJwhksgeL/7IFs4mKAgCxJbIQKmSyGCKyGScJshqL/7IaIQWvi/4WULIas4mKAgCxJbIQKmSyGCKyGScJshonBmSyGiEFr4v+FlCyGrYlshAnB2SyGCKyGYAPYWRkX2FyYzIwMF9mZWVzshonBWSyGov/FrIaKmQWshqziQ==',
  'voi:testnet:voi_arc72_dutch_approval:latest': 'CiAFAQBkAgYmDQpiaWRfYW1vdW50C2JpZF9hY2NvdW50A2VuZBJjb3VudGVyX3BhcnR5X2ZlZXMMZmVlc19hZGRyZXNzCW1haW5fZmVlcw5sYXRlX2JpZF9kZWxheQltaW5fcHJpY2UKbmZ0X2FwcF9pZAZuZnRfaWQVY291bnRlcl9wYXJ0eV9hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAZ0xGSMSNhoAgARmdW5kEhBAAWoxGSMSNhoAgAxwcmVfdmFsaWRhdGUSEEABTjEZIxI2GgCAA2JpZBIQQAC9MRkjEjYaAIAFY2xvc2USEEAAVjEZgQUSQAAVMRkiEjEZJRIRMRmBBBIRQAABACNDMQAyCRIxACcEZBIRRCOAE2F1Y3Rpb24sY2FuY2VsLDEvNzKIAaopZDIDE0AABYgBiiJDiAIxQv/1KWQyAxMqZDIHDhBEI4ASYXVjdGlvbixjbG9zZSwxLzcyiAFzKWSIAd4oZCcFZCtkCAskCihkK2QLJAqIAYgoZChkJwVkK2QICyQKCYgBYogBMCJDMgcqZAwxFiIJOBAiEhAxFiIJOAcyChIQMRYiCTgIJwdkDxAxFiIJOAgoZIFuCyQKDxBEI4AQYXVjdGlvbixiaWQsMS83MogA+ilkMgMTQAApKDEWIgk4CGcpMRYiCTgAZzIHJwZkCCpkD0AAAiJDKjIHJwZkCGdC//OIAV1C/9EiQzEAMgkSRCOAE2F1Y3Rpb24sY3JlYXRlLDEvNzKIAKIiQycINhoAF2cnCTYaAWcnBzYaAhdnKjYaAxdnJwo2GgRnKzYaBRdnJwSAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZykyA2cnBoHYBGcoI2cnBSVnJwuBjtiVGmcnDIAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnDGSyB4v/sgWziYoBALEishCL/7IIMgqyADIJsgeziYoCALEishCL/rIIMgqyACcEZLIHtiEEshAnC2SyGCOyGYAQYWRkX25ldHdvcmtfZmVlc7IaJwpkshqL/xayGrOJigEAsSEEshAnCGSyGCOyGYAE8vGUoLIaMgmyGov/shonCWSyGrOJigAAsSKyEChkMgAJsggpZLIHs4k=',
  'voi:testnet:voi_arc72_sale_approval:latest': 'CiAFAAFkAgYmCQVwcmljZRJjb3VudGVyX3BhcnR5X2ZlZXMJbWFpbl9mZWVzCm5mdF9hcHBfaWQGbmZ0X2lkFWNvdW50ZXJfcGFydHlfYWRkcmVzcwxmZWVzX2FkZHJlc3MLZmVlc19hcHBfaWQMbm90ZV9hZGRyZXNzMRgiEkABTDEZgQUSQAEjMRkiEjYaAIAEZnVuZBIQQADzMRkiEjYaAIAMdXBkYXRlX3ByaWNlEhBAAKwxGSISNhoAgAxwcmVfdmFsaWRhdGUSEEAAkDEZIhI2GgCAA2J1eRIQQAAVMRkjEjEZJRIRMRmBBBIRQAABACJDMRYjCTgIKGQSMRYjCTgHMgoSEDEWIwk4ECMSEDEWIwk4ADEAEhBEIoANc2FsZSxidXksMS83MogBKChkKmQpZAgLJAooZClkCyQKiAFDKGQoZCpkKWQICyQKCYgBHjEAiAFviADnI0MiQyNDMQAyCRI2GgEXIg0QRCKAEHNhbGUsdXBkYXRlLDEvNzKIANMoNhoBF2cjQyJDMQAyCRJEIoAQc2FsZSxjcmVhdGUsMS83MogArSNDIoAQc2FsZSxjYW5jZWwsMS83MogAlTEAMgkSRIgAdyNDKzYaABdnJwQ2GgFnKDYaAhdnJwU2GgNnKTYaBBdnJwaAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZyolZycHgY7YlRpnJwiAINluspI8SXkn1DKU35saZaYkPvIOJnmOTrzM4nJGes+GZyNDigAAMgpgIhNBAAmxI7IQMgmyCbOJigIAsSOyEIv+sggyCrIAJwhksgeL/7IFs4mKAQCxI7IQi/+yCDIKsgAyCbIHs4mKAgCxI7IQi/6yCDIKsgAnBmSyB7YhBLIQJwdkshgishmAEGFkZF9uZXR3b3JrX2ZlZXOyGicFZLIai/8WshqziYoBALEhBLIQK2SyGCKyGYAE8vGUoLIaMgmyGov/shonBGSyGrOJ',
  'voi:testnet:voi_arc72_auction_approval:latest': 'CiAFAAFkAgYmCQVwcmljZRJjb3VudGVyX3BhcnR5X2ZlZXMJbWFpbl9mZWVzCm5mdF9hcHBfaWQGbmZ0X2lkFWNvdW50ZXJfcGFydHlfYWRkcmVzcwxmZWVzX2FkZHJlc3MLZmVlc19hcHBfaWQMbm90ZV9hZGRyZXNzMRgiEkABTDEZgQUSQAEjMRkiEjYaAIAEZnVuZBIQQADzMRkiEjYaAIAMdXBkYXRlX3ByaWNlEhBAAKwxGSISNhoAgAxwcmVfdmFsaWRhdGUSEEAAkDEZIhI2GgCAA2J1eRIQQAAVMRkjEjEZJRIRMRmBBBIRQAABACJDMRYjCTgIKGQSMRYjCTgHMgoSEDEWIwk4ECMSEDEWIwk4ADEAEhBEIoANc2FsZSxidXksMS83MogBKChkKmQpZAgLJAooZClkCyQKiAFDKGQoZCpkKWQICyQKCYgBHjEAiAFviADnI0MiQyNDMQAyCRI2GgEXIg0QRCKAEHNhbGUsdXBkYXRlLDEvNzKIANMoNhoBF2cjQyJDMQAyCRJEIoAQc2FsZSxjcmVhdGUsMS83MogArSNDIoAQc2FsZSxjYW5jZWwsMS83MogAlTEAMgkSRIgAdyNDKzYaABdnJwQ2GgFnKDYaAhdnJwU2GgNnKTYaBBdnJwaAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZyolZycHgY7YlRpnJwiAINluspI8SXkn1DKU35saZaYkPvIOJnmOTrzM4nJGes+GZyNDigAAMgpgIhNBAAmxI7IQMgmyCbOJigIAsSOyEIv+sggyCrIAJwhksgeL/7IFs4mKAQCxI7IQi/+yCDIKsgAyCbIHs4mKAgCxI7IQi/6yCDIKsgAnBmSyB7YhBLIQJwdkshgishmAEGFkZF9uZXR3b3JrX2ZlZXOyGicFZLIai/8WshqziYoBALEhBLIQK2SyGCKyGYAE8vGUoLIaMgmyGov/shonBGSyGrOJ',
  'voi:testnet:voi_rwa_sale_approval:latest': 'CiAEAQBkAiYHBXByaWNlEmNvdW50ZXJfcGFydHlfZmVlcwltYWluX2ZlZXMVY291bnRlcl9wYXJ0eV9hZGRyZXNzDGZlZXNfYWRkcmVzcwtmZWVzX2FwcF9pZAxub3RlX2FkZHJlc3MxGCMSQAEvMRmBBRJAAQUxGSMSNhoAgARmdW5kEhBAANQxGSMSNhoAgAx1cGRhdGVfcHJpY2USEEAAjDEZIxI2GgCAA2J1eRIQQAAVMRkiEjEZJRIRMRmBBBIRQAABACNDMRYiCTgIKGQSMRYiCTgHMgoSEDEWIgk4ECISEDEWIgk4ADEAEhBEKGQqZClkCAskCihkKWQLJAqIAWEoZChkKmQpZAgLJAoJiAE8I4AOc2FsZSxidXksMS9yd2GIAQ6IAPYiQyNDMQAyCRI2GgEXIw0QRCOAEXNhbGUsdXBkYXRlLDEvcndhiADjKDYaARdnIkMjQzEAMgkSRCOAEXNhbGUsY3JlYXRlLDEvcndhiAC8IkMjgBFzYWxlLGNhbmNlbCwxL3J3YYgAozEAMgkSRIgAhSJDKDYaABdngARuYW1lNhoBZ4ALZGVzY3JpcHRpb242GgJnKzYaA2cpNhoEF2cnBIAgzOrK6JBtKbOmGz0eFd2PHt66wMJPJDM5nA01bne8pNhnKiVnJwWBjtiVGmcnBoAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnBmSyB4v/sgWziYoBALEishCL/7IIMgqyADIJsgeziYoCALEishCL/rIIMgqyACcEZLIHtoEGshAnBWSyGCOyGYAQYWRkX25ldHdvcmtfZmVlc7IaK2SyGov/FrIas4k=',
  'algo:testnet:algo_ASA_sale_approval:latest':
    'CiAFAQAEZAImCAVwcmljZRJjb3VudGVyX3BhcnR5X2ZlZXMGYXNhX2lkCW1haW5fZmVlcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAWQxGYEFEkABNzEZIxI2GgCABGZ1bmQSEEAA+TEZIxI2GgCADHVwZGF0ZV9wcmljZRIQQACxMRkjEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAJUxGSMSNhoAgANidXkSEEAAFTEZIhIxGSEEEhExGSQSEUAAAQAjQzEWIgk4CChkEjEWIgk4BzIKEhAxFiIJOBAiEhAxFiIJOAAxABIQRCOADnNhbGUsYnV5LDEvYXNhiAE6KGQrZClkCAslCihkKWQLJQqIAVUoZChkK2QpZAgLJQoJiAEwMQAiiAGAiAGXiAD1IkMjQyJDMQAyCRI2GgEXIw0QRCOAEXNhbGUsdXBkYXRlLDEvYXNhiADgKDYaARdnIkMjQzEAMgkSRCOAEXNhbGUsY3JlYXRlLDEvYXNhiAC5sSSyECpkshEyCrIUsyJDiAExI4ARc2FsZSxjYW5jZWwsMS9hc2GIAJAxADIJEkSIAHIiQyo2GgAXZyg2GgEXZycENhoCZyk2GgMXZycFgCDM6srokG0ps6YbPR4V3Y8e3rrAwk8kMzmcDTVud7yk2GcrIQRnJwaBjtiVGmcnB4Ag2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnB2SyB4v/sgWziYoBALEishCL/7IIMgqyADIJsgeziYoCALEishCL/rIIMgqyACcFZLIHtoEGshAnBmSyGCOyGYAQYWRkX25ldHdvcmtfZmVlc7IaJwRkshqL/xayGrOJigIAsSSyECpkshGL/rIUi/+yEjIAsgGzIkOKAACxJLIQKmSyETIJshWzIkM=',
  'algo:testnet:algo_ASA_auction_approval:latest': 'CiAFAQAEZAImDApiaWRfYW1vdW50C2JpZF9hY2NvdW50A2VuZBJjb3VudGVyX3BhcnR5X2ZlZXMGYXNhX2lkDGZlZXNfYWRkcmVzcwltYWluX2ZlZXMObGF0ZV9iaWRfZGVsYXkJbWluX3ByaWNlFWNvdW50ZXJfcGFydHlfYWRkcmVzcwtmZWVzX2FwcF9pZAxub3RlX2FkZHJlc3MxGCMSQAG2MRkjEjYaAIAEZnVuZBIQQAF0MRkjEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAVgxGSMSNhoAgANiaWQSEEAAxjEZIxI2GgCABWNsb3NlEhBAAFoxGYEFEkAAFTEZIhIxGSEEEhExGSQSEUAAAQAjQzEAMgkSMQAnBWQSEUQjgBRhdWN0aW9uLGNhbmNlbCwxL2FzYYgBvClkMgMTQAAIiAI8iAGZIkOIAkdC//IpZDIDEypkMgcOEEQjgBNhdWN0aW9uLGNsb3NlLDEvYXNhiAGBKWQiiAHriAIDKGQnBmQrZAgLJQooZCtkCyUKiAGSKGQoZCcGZCtkCAslCgmIAWyIAToiQzIHKmQMMRYiCTgQIhIQMRYiCTgHMgoSEDEWIgk4CCcIZA8QMRYiCTgIKGSBbgslCg8QRCOAEWF1Y3Rpb24sYmlkLDEvYXNhiAEDKWQyAxNAACkoMRYiCTgIZykxFiIJOABnMgcnB2QIKmQPQAACIkMqMgcnB2QIZ0L/84gBbUL/0SJDMQAyCRJEI4AUYXVjdGlvbixjcmVhdGUsMS9hc2GIAKqxJLIQJwRkshEyCrIUsyJDJwQ2GgBnJwg2GgEXZyo2GgIXZycJNhoDZys2GgQXZycFgCDM6srokG0ps6YbPR4V3Y8e3rrAwk8kMzmcDTVud7yk2GcpMgNnJweB2ARnKCNnJwYhBGcnCoGO2JUaZycLgCDZbrKSPEl5J9QylN+bGmWmJD7yDiZ5jk68zOJyRnrPhmciQ4oAADIKYCMTQQAJsSKyEDIJsgmziYoCALEishCL/rIIMgqyACcLZLIHi/+yBbOJigEAsSKyEIv/sggyCrIAMgmyB7OJigIAsSKyEIv+sggyCrIAJwVksge2gQayECcKZLIYI7IZgBBhZGRfbmV0d29ya19mZWVzshonCWSyGov/FrIas4mKAgCxJLIQJwRkshGL/rIUi/+yEjIAsgGzIkOKAACxJLIQJwRkshEyCbIVsyJDigAAsSKyEChkMgAJsggpZLIHs4k=',
  'algo:testnet:algo_ASA_dutch_approval:latest': 'CiAFAQAEZAImCwltYXhfcHJpY2UFc3RhcnQDZW5kEmNvdW50ZXJfcGFydHlfZmVlcwZhc2FfaWQJbWluX3ByaWNlCW1haW5fZmVlcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAUsxGYEFEkABHTEZIxI2GgCABGZ1bmQSEEAA3TEZIxI2GgCADHByZV92YWxpZGF0ZRIQQADBMRkjEjYaAIADYnV5EhBAABUxGSISMRkhBBIRMRkkEhFAAAEAI0MxFiIJOAgoZChkJwVkCTIHKWQJCypkKWQJCgkPMgcqZA4QMRYiCTgHMgoSEDEWIgk4ECISEDEWIgk4ADEAEhBEMRYiCTgIJwZkK2QICyUKMRYiCTgIK2QLJQqIAWcxFiIJOAgxFiIJOAgnBmQrZAgLJQoJiAE5MQAiiAGJiAGhI4APZHV0Y2gsYnV5LDEvYXNhiAEBiADpIkMjQyJDMQAyCRJEI4ASZHV0Y2gsY3JlYXRlLDEvYXNhiADasSSyECcEZLIRMgqyFLMiQ4gBUiOAEmR1dGNoLGNhbmNlbCwxL2FzYYgArzEAMgkSRIgAkSJDJwQ2GgBnKDYaARdnJwU2GgIXZyo2GgMXZycHNhoEZys2GgUXZykyB2cnCIAgzOrK6JBtKbOmGz0eFd2PHt66wMJPJDM5nA01bne8pNhnKGQnBWQNRCpkKWQNRCcGIQRnJwmBjtiVGmcnCoAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnCmSyB4v/sgWziYoBALEishCL/7IIMgqyADIJsgeziYoCALEishCL/rIIMgqyACcIZLIHtoEGshAnCWSyGCOyGYAQYWRkX25ldHdvcmtfZmVlc7IaJwdkshqL/xayGrOJigIAsSSyECcEZLIRi/6yFIv/shIyALIBsyJDigAAsSSyECcEZLIRMgmyFbMiQw==',
  'algo:testnet:ASA_ASA_sale_approval:latest': 'CiAFAQAEZAImCQVwcmljZQ5wYWltZW50X2FzYV9pZBJjb3VudGVyX3BhcnR5X2ZlZXMGYXNhX2lkCW1haW5fZmVlcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAXUxGYEFEkABSDEZIxI2GgCABGZ1bmQSEEABCjEZIxI2GgCADHVwZGF0ZV9wcmljZRIQQADCMRkjEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAKYxGSMSNhoAgANidXkSEEAAFTEZIhIxGSEEEhExGSQSEUAAAQAjQzEWIgk4EihkEjEWIgk4FDIKEhAxFiIJOBAkEhAxFiIJOAAxABIQMRYiCTgRKWQSEEQjgBBzYWxlLGJ1eSxhc2EvYXNhiAFGKGQnBGQqZAgLJQooZCpkCyUKiAFLKGQoZCcEZCpkCAslCgmIAZUxACKIAXWIAaWIAbSIAPwiQyNDIkMxADIJEjYaARcjDRBEI4ARc2FsZSx1cGRhdGUsMS9hc2GIAOcoNhoBF2ciQyNDMQAyCRJEI4ARc2FsZSxjcmVhdGUsMS9hc2GIAMCxJLIQK2SyETIKshSzIkOIATwjgBFzYWxlLGNhbmNlbCwxL2FzYYgAlzEAMgkSRIgAeSJDKzYaABdnKDYaARdnJwU2GgJnKjYaAxdnKTYaBBdnJwaAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZycEIQRnJweBjtiVGmcnCIAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnCGSyB4v/sgWziYoCALEkshApZLIRJwZkshSL/rISMgCyAbaBBrIQJwdkshgjshmADGFkZF9hc2FfZmVlc7IaJwVkshqL/xayGrOJigIAsSSyECtkshGL/rIUi/+yEjIAsgGzIkOKAQCxJLIQKWSyETIJshSL/7ISMgCyAbOJigAAsSSyECtkshEyCbIVsyJDigAAsSSyEClkshEyCbIVsyJD',
  'algo:testnet:ASA_ASA_auction_approval:latest':'CiAFAQAEZAImDQpiaWRfYW1vdW50C2JpZF9hY2NvdW50DnBhaW1lbnRfYXNhX2lkA2VuZBJjb3VudGVyX3BhcnR5X2ZlZXMGYXNhX2lkDGZlZXNfYWRkcmVzcwltYWluX2ZlZXMObGF0ZV9iaWRfZGVsYXkJbWluX3ByaWNlFWNvdW50ZXJfcGFydHlfYWRkcmVzcwtmZWVzX2FwcF9pZAxub3RlX2FkZHJlc3MxGCMSQAHJMRkjEjYaAIAEZnVuZBIQQAGHMRkjEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAWsxGSMSNhoAgANiaWQSEEAAzzEZIxI2GgCABWNsb3NlEhBAAF0xGYEFEkAAFTEZIhIxGSEEEhExGSQSEUAAAQAjQzEAMgkSMQAnBmQSEUQjgBRhdWN0aW9uLGNhbmNlbCwxL2FzYYgB1ilkMgMTQAALiAJaiAJqiAGwIkOIAnRC/+8pZDIDEytkMgcOEEQjgBNhdWN0aW9uLGNsb3NlLDEvYXNhiAGYKWQiiAHtKGQnB2QnBGQICyUKKGQnBGQLJQqIAZUoZChkJwdkJwRkCAslCgmIAd+IAfWIAgWIAUsiQzIHK2QMMRYiCTgQJBIQMRYiCTgUMgoSEDEWIgk4EicJZA8QMRYiCTgSKGSBbgslCg8QMRYiCTgRKmQSEEQjgBFhdWN0aW9uLGJpZCwxL2FzYYgBCilkMgMTQAApKDEWIgk4CGcpMRYiCTgAZzIHJwhkCCtkD0AAAiJDKzIHJwhkCGdC//OIAYpC/9EiQzEAMgkSRCOAFGF1Y3Rpb24sY3JlYXRlLDEvYXNhiACxsSSyECcFZLIRMgqyFLMiQycFNhoAZycJNhoBF2crNhoCF2cnCjYaA2cnBDYaBBdnKjYaBRdnJwaAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZykyA2cnCIHYBGcoI2cnByEEZycLgY7YlRpnJwyAINluspI8SXkn1DKU35saZaYkPvIOJnmOTrzM4nJGes+GZyJDigAAMgpgIxNBAAmxIrIQMgmyCbOJigIAsSKyEIv+sggyCrIAJwxksgeL/7IFs4mKAgCxJLIQKmSyEScGZLIUi/6yEjIAsgG2gQayECcLZLIYI7IZgAxhZGRfYXNhX2ZlZXOyGicKZLIai/8WshqziYoCALEkshAnBWSyEYv+shSL/7ISMgCyAbMiQ4oBALEkshAqZLIRMgmyFIv/shIyALIBs4mKAACxJLIQJwVkshEyCbIVsyJDigAAsSSyECpkshEyCbIVsyJDigAAsSSyECpkshEpZLIUKGQyAAmyEjIAsgGziQ==',
  'algo:testnet:ASA_ASA_dutch_approval:latest':'CiAFAQAEZAImDA5wYWltZW50X2FzYV9pZAltYXhfcHJpY2UFc3RhcnQDZW5kEmNvdW50ZXJfcGFydHlfZmVlcwZhc2FfaWQJbWluX3ByaWNlCW1haW5fZmVlcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAVsxGYEFEkABLTEZIxI2GgCABGZ1bmQSEEAA7TEZIxI2GgCADHByZV92YWxpZGF0ZRIQQADRMRkjEjYaAIADYnV5EhBAABUxGSISMRkhBBIRMRkkEhFAAAEAI0MxFiIJOBIpZClkJwZkCTIHKmQJCytkKmQJCgkPMgcrZA4QMRYiCTgUMgoSEDEWIgk4ECQSEDEWIgk4ADEAEhAxFiIJOBEoZBIQRDEWIgk4CCcHZCcEZAgLJQoxFiIJOAgnBGQLJQqIAV0xFiIJOAgxFiIJOAgnB2QnBGQICyUKCYgBnzEAIogBfogBr4gBvyOAD2R1dGNoLGJ1eSwxL2FzYYgBCIgA8CJDI0MiQzEAMgkSRCOAEmR1dGNoLGNyZWF0ZSwxL2FzYYgA4bEkshAnBWSyETIKshSzIkOIAV0jgBJkdXRjaCxjYW5jZWwsMS9hc2GIALYxADIJEkSIAJgiQycFNhoAZyk2GgEXZycGNhoCF2crNhoDF2cnCDYaBGcnBDYaBRdnKDYaBhdnKjIHZycJgCDM6srokG0ps6YbPR4V3Y8e3rrAwk8kMzmcDTVud7yk2GcpZCcGZA1EK2QqZA1EJwchBGcnCoGO2JUaZycLgCDZbrKSPEl5J9QylN+bGmWmJD7yDiZ5jk68zOJyRnrPhmciQ4oAADIKYCMTQQAJsSKyEDIJsgmziYoCALEishCL/rIIMgqyACcLZLIHi/+yBbOJigIAsSSyEChkshEnCWSyFIv+shIyALIBtoEGshAnCmSyGCOyGYAMYWRkX2FzYV9mZWVzshonCGSyGov/FrIas4mKAgCxJLIQJwVkshGL/rIUi/+yEjIAsgGzIkOKAQCxJLIQKGSyETIJshSL/7ISMgCyAbOJigAAsSSyECcFZLIRMgmyFbMiQ4oAALEkshAoZLIRMgmyFbMiQw==',
  'algo:testnet:ASA_rwa_sale_approval:latest':'CiAFAQAEZAImCQVwcmljZQ5wYWltZW50X2FzYV9pZBJjb3VudGVyX3BhcnR5X2ZlZXMGYXNhX2lkCW1haW5fZmVlcxVjb3VudGVyX3BhcnR5X2FkZHJlc3MMZmVlc19hZGRyZXNzC2ZlZXNfYXBwX2lkDG5vdGVfYWRkcmVzczEYIxJAAXUxGYEFEkABSDEZIxI2GgCABGZ1bmQSEEABCjEZIxI2GgCADHVwZGF0ZV9wcmljZRIQQADCMRkjEjYaAIAMcHJlX3ZhbGlkYXRlEhBAAKYxGSMSNhoAgANidXkSEEAAFTEZIhIxGSEEEhExGSQSEUAAAQAjQzEWIgk4EihkEjEWIgk4FDIKEhAxFiIJOBAkEhAxFiIJOAAxABIQMRYiCTgRKWQSEEQjgBBzYWxlLGJ1eSxhc2EvYXNhiAFGKGQnBGQqZAgLJQooZCpkCyUKiAFLKGQoZCcEZCpkCAslCgmIAZUxACKIAXWIAaWIAbSIAPwiQyNDIkMxADIJEjYaARcjDRBEI4ARc2FsZSx1cGRhdGUsMS9hc2GIAOcoNhoBF2ciQyNDMQAyCRJEI4ARc2FsZSxjcmVhdGUsMS9hc2GIAMCxJLIQK2SyETIKshSzIkOIATwjgBFzYWxlLGNhbmNlbCwxL2FzYYgAlzEAMgkSRIgAeSJDKzYaABdnKDYaARdnJwU2GgJnKjYaAxdnKTYaBBdnJwaAIMzqyuiQbSmzphs9HhXdjx7eusDCTyQzOZwNNW53vKTYZycEIQRnJweBjtiVGmcnCIAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnCGSyB4v/sgWziYoCALEkshApZLIRJwZkshSL/rISMgCyAbaBBrIQJwdkshgjshmADGFkZF9hc2FfZmVlc7IaJwVkshqL/xayGrOJigIAsSSyECtkshGL/rIUi/+yEjIAsgGzIkOKAQCxJLIQKWSyETIJshSL/7ISMgCyAbOJigAAsSSyECtkshEyCbIVsyJDigAAsSSyEClkshEyCbIVsyJD',
  'algo:testnet:algo_rwa_sale_approval:latest': 'CiAEAQBkAiYHBXByaWNlEmNvdW50ZXJfcGFydHlfZmVlcwltYWluX2ZlZXMVY291bnRlcl9wYXJ0eV9hZGRyZXNzDGZlZXNfYWRkcmVzcwtmZWVzX2FwcF9pZAxub3RlX2FkZHJlc3MxGCMSQAEvMRmBBRJAAQUxGSMSNhoAgARmdW5kEhBAANQxGSMSNhoAgAx1cGRhdGVfcHJpY2USEEAAjDEZIxI2GgCAA2J1eRIQQAAVMRkiEjEZJRIRMRmBBBIRQAABACNDMRYiCTgIKGQSMRYiCTgHMgoSEDEWIgk4ECISEDEWIgk4ADEAEhBEKGQqZClkCAskCihkKWQLJAqIAWEoZChkKmQpZAgLJAoJiAE8I4AOc2FsZSxidXksMS9yd2GIAQ6IAPYiQyNDMQAyCRI2GgEXIw0QRCOAEXNhbGUsdXBkYXRlLDEvcndhiADjKDYaARdnIkMjQzEAMgkSRCOAEXNhbGUsY3JlYXRlLDEvcndhiAC8IkMjgBFzYWxlLGNhbmNlbCwxL3J3YYgAozEAMgkSRIgAhSJDKDYaABdngARuYW1lNhoBZ4ALZGVzY3JpcHRpb242GgJnKzYaA2cpNhoEF2cnBIAgzOrK6JBtKbOmGz0eFd2PHt66wMJPJDM5nA01bne8pNhnKiVnJwWBjtiVGmcnBoAg2W6ykjxJeSfUMpTfmxplpiQ+8g4meY5OvMzickZ6z4ZnIkOKAAAyCmAjE0EACbEishAyCbIJs4mKAgCxIrIQi/6yCDIKsgAnBmSyB4v/sgWziYoBALEishCL/7IIMgqyADIJsgeziYoCALEishCL/rIIMgqyACcEZLIHtoEGshAnBWSyGCOyGYAQYWRkX25ldHdvcmtfZmVlc7IaK2SyGov/FrIas4k=',
}

export default async function getContract(contract: ContractId): Promise<string> {
  // TODO: Retrieve contract from database
  return new Promise((resolve, reject) => {
    if (!contracts[contract]) reject(new Error(`Contract ${contract} not found`))
    resolve(contracts[contract])
  })
}
