require("dotenv").config();
const gql = require("graphql-request").gql;

module.exports = {
  // for now we only post reply-to to anyone
  metaweaveQuery: (addresses, minBlockHeight) => gql`
  query {
    transactions(
      sort: HEIGHT_DESC
      tags: [
        { name: "Protocol-Name", values: ["argora"] }
        { name: "Protocol-Version", values: ["${process.env.PROTOCOL_VERSION}"] }
      ]
      block: {min: ${minBlockHeight}, max: 1000000000}
      owners: ${JSON.stringify(addresses)}
    ) {
      edges {
        node {
          id
          block {
            timestamp
          }
          owner {
            address
            key
          }
  
          tags {
            name
            value
          }
        }
      }
    }
  }
  
  `,
  ARWEAVE_GQL_ENDPOINT: "https://arweave.net/graphql",
  ARWEAVE_GATEWAY: "https://arweave.net",
};
