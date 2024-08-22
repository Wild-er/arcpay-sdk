# arcpay-sdk

arcpay is a web3 payment processor, facilitating the use of royalty points to purchase digital and real-world assets.
The sdk provides a plug and play interface with arcpay contracts and enable users to create and purchase listings.

## Features
- Supported chain: `voi:testnet`, `voi:mainnet (soon)`, `algorand:testnet (soon)`, `algorand:mainnet (soon)`

## Getting Started

To get started with arcpay, you need to instantiate the arcpay client using the `useArcpay` helper.

### Installation

```sh
npm install arcpay-sdk
```

### Usage
```typescript
import { useArcpay } from 'arcpay-sdk';

// Instantiate the arcpay client
const arcpayClient = useArcpay({
  network: 'voi:testnet',
  apiKey: '<your-api-key>', // API key can be obtained from the arcpay dashboard
});

// Create a VOI -> ARC-72 sale
const listingId: string = await arcpayClient.create({listingType: 'sale'});

// Get all listings for your account
const listings: Listing[] = await arcpayClient.getListings();

// Buy a listing
const confirmation: TransactionConfirmation = arcpayClient.buy(listingId);
```

### Methods

---
#### `useArcpay`
Instantiates the arcpay client.

##### Parameters

- `options: ArcpayClientOptions`: Options to instantiate the client `REQUIRED`
    - `network: PublicNetwork`: The network to use. Use `'voi:testnet'` for VOI testnet. `REQUIRED`
    - `apiKey?: string`: Account API key. Can be obtained from the arcpay dashboard. The API key origin must match the request's origin. API key is required in most cases unless client is provided.
    - `darkMode?: boolean`: Use dark mode for the arcpay modal. Default is `false`.
    - `client?: SupabaseClient`: SupabaseClient to use. if not provided API key is required. This is for advanced use cases and shouldn't be used in most cases.

##### Returns

- `ArcpayClient`: Client object to interact with arcpay.
---

#### `client.create`
Creates a new listing. Calling this method will display the arcpay listing creation modal to the user.

##### Parameters

- `options?: CreateOptions`: Optional options to create listing
    - `assetId?: string`: Asset ID to create listing for. If provided, the asset will be automatically selected and displayed when the asset is present in the user's wallet. If not provided or not present in the user wallet, the user will be prompted to select an asset.
    - `listingType?: ListingType`: Listing type to create. When provided the listing type selection radio will be hidden from the UI. Default is `sale`.
    - `listingName?: string`: Name for the listing. If not provided, the asset name will be used.
    - `tags?: string[]`: Tags for the listing. Can be used to filter listings. Default is `[]`.
    - `accountId?: number`: Account ID to create the listing for. This is for advanced use cases and shouldn't be used in most cases.

##### Returns

- `Promise<string>`: A promise that resolves to the listing ID.
---

#### `client.buy`
Buys a listing. Calling this method will display the arcpay purchase modal to the user.

##### Parameters

- `id: string`: Listing ID to purchase.

##### Returns

- `Promise<TransactionConfirmation>`: A promise that resolves to the algosdk transaction confirmation object.
---

#### `client.getListings`
Returns all listings for the account.

##### Returns

- `Promise<Listing[]>`: A promise that resolves to the list of listings.
---

#### `client.getListingById`
Returns details for a listing given it's ID.

##### Parameters

- `id: string`: Listing ID to query.

##### Returns

- `Promise<Listing>`: A promise that resolves to the details of the listing.
---

#### `client.toggleDarkMode`
Toggle dark mode for the arcpay modal.

##### Parameters

- `bool?: string`: Optional boolean to set dark mode. If not provided, it will toggle the current dark mode.


