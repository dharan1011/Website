import React from 'react';

import RequestResponse from 'components/RequestResponse';

import './Validators.scss';

const Validators = () => {
  return (
    <section className="Validators">
      <h1 className="page-title">Validators</h1>
      <p>Confirmation validators will maintain a record of all connected validators.</p>

      <h2 className="endpoint">GET /validators</h2>
      <RequestResponse
        code={`[
  {
    "account_number": "4d2ec91f37bc553bc538e91195669b666e26b2ea3e4e31507e38102a758d4f86",
    "ip_address": "192.168.1.65",
    "node_identifier": "59479a31c3b91d96bb7a0b3e07f18d4bf301f1bb0bde05f8d36d9611dcbe7cbf",
    "port": 8000,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "4.0000000000000000",
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
    "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": "100.00"
  },
  {
    "account_number": "ad1f8845c6a1abb6011a2a434a079a087c460657aad54329a84b406dce8bf314",
    "ip_address": "192.168.1.75",
    "node_identifier": "3afdf37573f1a511def0bd85553404b7091a76bcd79cdcebba1310527b167521",
    "port": 8000,
    "protocol": "http",
    "version": "v1.0",
    "default_transaction_fee": "4.0000000000000000",
    "root_account_file": "https://gist.githubusercontent.com/buckyroberts/519b5cb82a0a5b5d4ae8a2175b722520/raw/9237deb449e27cab93cb89ea3346ecdfc61fe9ea/0.json",
    "root_account_file_hash": "4694e1ee1dcfd8ee5f989e59ae40a9f751812bf5ca52aca2766b322c4060672b",
    "seed_block_identifier": "",
    "daily_confirmation_rate": null,
    "trust": "100.00"
  }
]`}
        heading="Response"
      />
    </section>
  );
};

export default Validators;
