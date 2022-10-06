export type SolanaMovies = {
  version: "0.1.0";
  name: "solana_movies";
  instructions: [
    {
      name: "initialize";
      accounts: [
        {
          name: "movieGif";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "gifUrl";
          type: "string";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "movieGif";
      type: {
        kind: "struct";
        fields: [
          {
            name: "owner";
            type: "publicKey";
          },
          {
            name: "gifUrl";
            type: "string";
          }
        ];
      };
    }
  ];
  metadata: {
    address: "AEeAgG7D8uYHkGfFKvRQgqbSnK6WsDfivzXCKhA3UxXN"
  }
};

export const IDL: SolanaMovies = {
  version: "0.1.0",
  name: "solana_movies",
  instructions: [
    {
      name: "initialize",
      accounts: [
        {
          name: "movieGif",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "gifUrl",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "movieGif",
      type: {
        kind: "struct",
        fields: [
          {
            name: "owner",
            type: "publicKey",
          },
          {
            name: "gifUrl",
            type: "string",
          },
        ],
      },
    },
  ],
  metadata: {
    address: "AEeAgG7D8uYHkGfFKvRQgqbSnK6WsDfivzXCKhA3UxXN"
  }
};


